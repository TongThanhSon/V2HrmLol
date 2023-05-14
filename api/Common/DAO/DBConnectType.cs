using System;
using System.Collections.Generic;
using System.Text;

namespace Common.DataContractCore.Base
{
    public class DBConnectType
    {
        public class OracleDB { }
        public class MsSQLDB { }
    }

    public class DBAction
    {
        public class System { }
        public class Read { }
        public class Write { }
    }
}
