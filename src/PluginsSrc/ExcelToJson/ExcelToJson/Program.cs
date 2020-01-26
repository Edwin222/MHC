using ExcelToJson.Config;
using ExcelToJson.Converter;
using ExcelToJson.Helper;
using NPOI.SS.UserModel;
using System;
using System.IO;
using System.Linq;

namespace ExcelToJson
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Count() == 0)
            {
                ConvertExcelToJson();
                return;
            }
            else if(args.Count() == 1)
            {
                if(args[0] == "help")
                {
                    Console.WriteLine("Command List\n" +
                        "-in <Path> : Set directory to find excel files.\n" +
                        "-out <Path> : Set directory to create json files.\n");

                    return;
                }
            }
            else if(args.Count() == 2)
            {
                var configuration = new Configuration();
                configuration.Read();

                if(args[0] == "-in")
                {
                    Configuration.WriteConfigFile(args[1], configuration.ExportDirectory);
                    return;
                }
                else if(args[0] == "-out")
                {
                    Configuration.WriteConfigFile(configuration.ImportDirectory, args[1]);
                    return;
                }
            }

            Logger.Warning("Invalid command line input.");
            return;
        }

        static void ConvertExcelToJson()
        {
            var config = new Configuration();
            config.Read();

            IWorkbook workbook = null;

            Logger.Log($"Start Converting : {config.ImportDirectory} => {config.ExportDirectory}");
            var importFiles = Directory.GetFiles(config.ImportDirectory);

            foreach (var filePath in importFiles)
            {
                using (var file = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    workbook = WorkbookFactory.Create(file);
                }

                var fileName = FileHelper.ParseFileNameFromPath(filePath);

                Logger.Log($"Convert : {FileHelper.ParseFileNameWithExtensionFromPath(filePath)}");
                var sheetNum = workbook.NumberOfSheets;

                for (var i = 0; i < sheetNum; i++)
                {
                    var sheet = workbook.GetSheetAt(i);

                    var jsonConverter = new JsonConverter(sheet);

                    using (var jsonOutput = new StreamWriter(new FileStream($"{config.ExportDirectory}\\{fileName}.{sheet.SheetName}.json", FileMode.Create, FileAccess.Write)))
                    {
                        jsonOutput.Write(jsonConverter.Convert());
                    }

                    Logger.Log($"Create : {fileName}.{sheet.SheetName}.json");
                }
            }
        }
    }
}
