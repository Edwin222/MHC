using NPOI.SS.UserModel;
using System.Collections.Generic;
using System.Linq;

namespace ExcelToJson.Converter
{
    public class JsonConverter
    {
        readonly ISheet _sheet;
        readonly List<string> _columnNames;
        readonly int _columnCount;

        public JsonConverter(ISheet sheet)
        {
            _sheet = sheet;
            _columnNames = new List<string>();
            
            var firstRow = _sheet.GetRow(_sheet.FirstRowNum);

            foreach(var cell in firstRow)
            {
                _columnNames.Add(cell.StringCellValue);
            }

            _columnCount = _columnNames.Count();
        }

        public string Convert()
        {
            // First Row is Category Row;
            var initialRowNum = _sheet.FirstRowNum + 1;
            var lastRowNum = _sheet.LastRowNum;

            var jsonBuilder = new JsonBuilder();

            using (jsonBuilder)
            {
                for (var i = initialRowNum; i <= lastRowNum; i++)
                {
                    var row = _sheet.GetRow(i);

                    using (var item = jsonBuilder.CreateLiteralSection())
                    {
                        for (var colCursor = 0; colCursor < _columnCount; colCursor++)
                        {
                            item.WritePair(_columnNames[colCursor], row.GetCell(colCursor).StringCellValue);
                        }
                    }
                }
            }

            return jsonBuilder.Content;
        }
    }
}
