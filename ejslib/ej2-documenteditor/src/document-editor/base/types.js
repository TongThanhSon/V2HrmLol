/**
 * @private
 */
export var CharacterRangeType;
(function (CharacterRangeType) {
    CharacterRangeType[CharacterRangeType["LeftToRight"] = 0] = "LeftToRight";
    CharacterRangeType[CharacterRangeType["RightToLeft"] = 1] = "RightToLeft";
    CharacterRangeType[CharacterRangeType["WordSplit"] = 2] = "WordSplit";
    CharacterRangeType[CharacterRangeType["Number"] = 4] = "Number";
    CharacterRangeType[CharacterRangeType["Tab"] = 6] = "Tab";
})(CharacterRangeType || (CharacterRangeType = {}));
