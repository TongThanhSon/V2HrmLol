using System.Data;

namespace Common.DAO
{
    public class CustomParameter
    {
        public string Name { set; get; }
        public int Size { set; get; }
        public CustomDbType DataType { set; get; }

        public ParameterDirection Direction { set; get; }
        public object Value { set; get; }
    }

    /// <summary>
    /// Custom datatype 
    /// It will be converted in DAO to OracleDBType or SQLDBType or otherType
    /// </summary>
    public enum CustomDbType
    {
        NChar = 0,
        NVarChar = 1,
        DateTime = 2,
        Decimal = 3,
        Double = 4,
        Int = 5,
        Timestamp = 6,
        XmlType = 7,
        /// <summary>
        /// Use in Oracle (an other is ignored)
        /// </summary>
        Cursor = 8

    }
}
