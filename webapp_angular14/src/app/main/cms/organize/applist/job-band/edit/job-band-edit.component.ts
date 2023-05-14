import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Inject,
  AfterViewInit,
} from "@angular/core";
import { Subject } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";

// Service Translate
import { TranslationLoaderService } from "src/app/common/translation-loader.service";
import { TranslateService } from "@ngx-translate/core";
// Import the locale files
import { locale as english } from "../i18n/en";
import { locale as vietnam } from "../i18n/vi";
// Globals File
import { Globals } from "src/app/common/globals";
import { Configs } from "src/app/common/configs";
import { Notification } from "src/app/common/notification";
const _ = require("lodash");
import { L10n, setCulture } from "@syncfusion/ej2-base";
import {
  FilterService,
  VirtualScrollService,
} from "@syncfusion/ej2-angular-grids";
import { ToolbarItem, ToolbarInterface } from "src/app/_models/index";
import { SalaryRank } from "src/app/_models/app/cms/index";

import { CoreService } from "src/app/_services/core.service";
import { ConfigService } from "src/app/_services/config.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalService } from "src/app/_services/modal.service";
import { Query, Predicate, DataManager } from "@syncfusion/ej2-data";
import { FieldSettingsModel } from "@syncfusion/ej2-dropdowns";
import * as moment from "moment";
const async = require("async");
const $ = require("jquery");
import { JobBand } from "src/app/_models/app/cms/profile/applist/jobBand";
setCulture("en");

@Component({
  selector: "app-job-band-edit",
  templateUrl: "./job-band-edit.component.html",
  styleUrls: ["./job-band-edit.component.scss"],
  providers: [FilterService, VirtualScrollService],
  encapsulation: ViewEncapsulation.None,
})
export class JobBandEditComponent implements OnInit {
  // Varriable Language
  flagState = "";
  // flag show popup toolbar Back
  flagePopup = true;
  paramId = "";

  model: JobBand = new JobBand();
  modelTemp: JobBand = new JobBand();
  languages: any;
  selectedLanguage: any;
  mode: any;
  editForm!: FormGroup;
  public query = new Query();

  // Toolbar Item
  public toolbar!: ToolbarInterface[];

  // Private
  private _unsubscribeAll: Subject<any>;
  lstSalaryScaleId: any;

  /**
   * Constructor
   *
   */
  constructor(
    private _coreService: CoreService,
    private modalService: ModalService,
    private notification: Notification,
    private globals: Globals,
    public configs: Configs,
    public router: Router,
    private _formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private _translateService: TranslateService,
    private _configService: ConfigService,
    private _tlaTranslationLoaderService: TranslationLoaderService
  ) {
    // Get Route Param
    this.activatedRoute.params.subscribe((params: Params) => {
      const paramId = params["id"];
      // Nếu trạng thái chỉnh sửa thì Get dữ liệu
      if (paramId !== "new") {
        const objParam = window.atob(paramId);
        const paramUrl = JSON.parse(objParam);
        if (paramUrl && paramUrl.id) {
          this.paramId = paramUrl.id;
          this.flagState = paramUrl.type;
        } else {
          // Xu ly redirect
          this.router.navigate(["/errors/404"]);
        }
      } else {
        this.flagState = "new";
      }
    });

    // Set language
    this.languages = this.globals.languages;

    this._configService._configSubject.next("true");
    // Load file language
    this._tlaTranslationLoaderService.loadTranslations(vietnam, english);

    this.editForm = this._formBuilder.group({
      nameVN: ["", [Validators.required, Validators.maxLength(100)]],
      nameEN: [
        "",
        [
          Validators.required,
          Validators.maxLength(100)
        ],
      ],
      levelFrom: [""]
    });

    // Set the private defaults
    this._unsubscribeAll = new Subject();
    L10n.load(this.configs.languageGrid);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    // Set the selected language from default languages
    this.selectedLanguage = _.find(this.languages, {
      id: this._translateService.currentLang,
    });
    this._translateService.use(this.selectedLanguage.id);

    // Build toolbar
    this.buildToolbar();

    if (this.flagState === "view") {
      this.editForm.disable();
    }
    async.waterfall(
      [
        (cb: any) => {
          if (this.paramId) {
            this._coreService
              .Get("hr/job-band/" + this.paramId)
              .subscribe((res: any) => {
                this.modelTemp = res.data;
                cb();
              });
          } else {
            cb();
          }
        }
      ],
      (err: any, ok: any) => {
        this.model = _.cloneDeep(this.modelTemp);
        //delete this.modelTemp;
      }
    );
    this.mode = "CheckBox";
  }

  // Build Toolbar
  buildToolbar = () => {
    setTimeout(() => {
      let toolbarList: any[] = [];
      if (this.flagState === "view") {
        toolbarList = [ToolbarItem.BACK, ToolbarItem.EDIT];
      }
      if (this.flagState === "new") {
        toolbarList = [ToolbarItem.BACK, ToolbarItem.SAVE];
      }
      if (this.flagState === "edit") {
        toolbarList = [ToolbarItem.BACK, ToolbarItem.SAVE];
      }
      this.toolbar = this.globals.buildToolbar(
        "job-band-edit",
        toolbarList
      );
    }, 200);
  };

  // Event Click Toolbar
  clickToolbar = (itemButton: any): void => {
    const buttonId = itemButton.id;
    switch (buttonId) {
      case ToolbarItem.BACK:
        if (this.editForm.dirty && this.editForm.touched) {
          this.flagePopup = false;
        }
        // if (
        //   (this.editForm.dirty && this.editForm.touched) ||
        //   this.flagePopup === false
        // ) {
        //   this.modalService.open("confirm-back-modal");
        // }
        // if (this.flagePopup === true) {
        //   this.router.navigate(["cms/profile/list/salaryrank"]);
        // }
        this.router.navigate(["cms/organize/list/job-band"]);
        break;
      case ToolbarItem.SAVE:
        this.saveData();
        break;
      default:
        break;
    }
  };
  // lưu data open popup
  saveData = () => {
    if (!this.editForm.valid) {
      this.notification.warning("Form chưa hợp lệ !");
      this.editForm.markAllAsTouched();
      return;
    }

    let param = this.convertModel(this.model);








    

    this._coreService.Post("hr/job-band/update", param).subscribe(
      (res: any) => {
        //check error
        debugger;
        if (res.statusCode == 400) {
          this.notification.checkErrorMessage(res.message);
        } else {
          this.notification.editSuccess();
          this.router.navigate(["/cms/organize/list/job-band"]);
        }
      },
      (error: any) => {
        this.notification.editError();
      }
    );
  };
  convertModel(param: any) {
    let model = _.cloneDeep(param);
    return model;
  }
  
  // filter type
  // change date
  public onFiltering(e: any, a: any) {
    e.preventDefaultAction = true;
    const predicate = new Predicate("name", "contains", e.text, true, true);
    this.query = new Query();
    this.query = e.text !== "" ? this.query.where(predicate) : this.query;
    e.updateData(a, this.query);
  }
}
