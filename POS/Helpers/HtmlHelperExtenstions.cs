using System.IO;
using System.Text;
using System.Web.Mvc;

namespace POS.Helpers
{
    public static class HtmlHelperExtensions
    {
        public static MvcHtmlString RequireJs(this HtmlHelper helper, string config, string module)
        {
            var require = new StringBuilder();

            const string jsLocation = "/public/js/";


            if (File.Exists(helper.ViewContext.HttpContext.Server.MapPath(Path.Combine(jsLocation, module + ".js"))))
            {
                require.AppendLine("require( [ \"" + jsLocation + config + "\" ], function() {");
                require.AppendLine("    require( [ \"" + module + "\"] );");
                require.AppendLine("});");
            }

            return new MvcHtmlString(require.ToString());
        }

        public static MvcHtmlString ViewSpecificRequireJS(this HtmlHelper helper)
        {
            var action = helper.ViewContext.RouteData.Values["action"];
            var controller = helper.ViewContext.RouteData.Values["controller"];

            return helper.RequireJs("config.js", $"views/{controller}/{action}");
        }

    }
}


