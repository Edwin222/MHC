using System;
using System.Collections.Generic;
using System.Linq;

namespace ExcelToJson.Converter
{
    public class JsonBuilder : IDisposable, IObjectLiteralSectionDelegate
    {
        public string Content { get; private set; }

        readonly List<ObjectLiteralSection> _sectionCollection;

        int _currentIndent;

        public JsonBuilder()
        {
            Content = string.Empty;
            _currentIndent = 0;
            _sectionCollection = new List<ObjectLiteralSection>();

            WriteLine("{");
            _currentIndent++;

            WriteLine("\"Repo\": [");
            _currentIndent++;
        }

        public ObjectLiteralSection CreateLiteralSection()
        {
            return new ObjectLiteralSection(this);
        }

        void WriteLine(string text)
        {
            WriteIndentation();
            Content += text + "\n";
        }

        void WriteIndentation()
        {
            for (var i = 0; i < _currentIndent; i++)
            {
                Content += "    ";
            }
        }

        public void Dispose()
        {
            _currentIndent--;
            WriteLine("]");

            _currentIndent--;
            WriteLine("}");
        }

        void IObjectLiteralSectionDelegate.OnCreated(ObjectLiteralSection section)
        {
            _sectionCollection.Add(section);
            WriteLine("{");
            _currentIndent++;
        }

        void IObjectLiteralSectionDelegate.OnWrited(ObjectLiteralSection section, string text)
        {
            if (_sectionCollection.Last() != section)
            {
                throw new Exception($"마지막으로 생성된 섹션이 아닌 섹션이 텍스트 {text}를 쓰려고 했습니다.");
            }

            WriteLine(text);
        }

        void IObjectLiteralSectionDelegate.OnDisposed(ObjectLiteralSection section)
        {
            _sectionCollection.Remove(section);
            _currentIndent--;
            WriteLine("},");
        }
    }
}
