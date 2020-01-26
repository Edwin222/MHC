using System;

namespace ExcelToJson.Converter
{
    public class ObjectLiteralSection : IDisposable
    {
        readonly IObjectLiteralSectionDelegate _sectionDelegate;

        public ObjectLiteralSection(IObjectLiteralSectionDelegate sectionDelegate)
        {
            _sectionDelegate = sectionDelegate;

            _sectionDelegate.OnCreated(this);
        }

        public void WritePair(string key, string value)
        {
            _sectionDelegate.OnWrited(this, $"\"{key}\": \"{value}\",");
        }

        public void Dispose()
        {
            _sectionDelegate.OnDisposed(this);
        }
    }
}
