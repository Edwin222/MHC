using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExcelToJson.Helper
{
    public static class Logger
    {
        public static void Log(string msg)
        {
            Console.WriteLine($"[LOG] : {msg}");
        }

        public static void Warning(string msg)
        {
            Console.Error.WriteLine($"[WARN] : {msg}");
        }

        public static void Error(string msg)
        {
            Console.Error.WriteLine($"[ERROR] : {msg}");
            throw new Exception();
        }
    }
}
