#pragma checksum "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ac51e54fb2f22036e298d124f6b321962645edf2"
// <auto-generated/>
#pragma warning disable 1591
namespace PruebaTecnicaJAGFront.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.AspNetCore.Components.Web.Virtualization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using PruebaTecnicaJAGFront;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\_Imports.razor"
using PruebaTecnicaJAGFront.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
using PruebaTecnicaJAGFront.Data;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
using System.Text.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
using System.Text.Json.Serialization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
using PruebaTecnicaJAGFront.Services;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/")]
    public partial class Index : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<h1>Conexión con api prueba técnica</h1>");
#nullable restore
#line 13 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
 if (listarPersonas == null)
{

#line default
#line hidden
#nullable disable
            __builder.AddMarkupContent(1, "<p>Por favor espere.</p>");
#nullable restore
#line 16 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
}
else
{

#line default
#line hidden
#nullable disable
            __builder.OpenElement(2, "table");
            __builder.AddAttribute(3, "class", "table table-striped");
            __builder.AddAttribute(4, "style", "font-size: 12px");
            __builder.AddMarkupContent(5, "<thead><tr><th>Rut</th>\r\n                <th>Nombres</th>\r\n                <th>Dirección</th>\r\n                <th>Email</th></tr></thead>\r\n        ");
            __builder.OpenElement(6, "tbody");
#nullable restore
#line 29 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
             foreach (var p in listarPersonas)
            {

#line default
#line hidden
#nullable disable
            __builder.OpenElement(7, "tr");
            __builder.OpenElement(8, "td");
            __builder.AddContent(9, 
#nullable restore
#line 32 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
                         p.Rut

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(10, "\r\n                    ");
            __builder.OpenElement(11, "td");
            __builder.AddContent(12, 
#nullable restore
#line 33 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
                         p.Name

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(13, "\r\n                    ");
            __builder.OpenElement(14, "td");
            __builder.AddContent(15, 
#nullable restore
#line 34 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
                         p.Direccion

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(16, "\r\n                    ");
            __builder.OpenElement(17, "td");
            __builder.AddContent(18, 
#nullable restore
#line 35 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
                         p.Email

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.CloseElement();
#nullable restore
#line 38 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
            }

#line default
#line hidden
#nullable disable
            __builder.CloseElement();
            __builder.CloseElement();
#nullable restore
#line 41 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
#nullable restore
#line 43 "D:\proyecto\PruebaTecnicaJAGFront\PruebaTecnicaJAGFront\Pages\Index.razor"
       
    private IEnumerable<Personas> personas = Array.Empty<Personas>();
    
    private bool shouldRender;

    protected override bool ShouldRender() => shouldRender;

    protected override async Task OnInitializedAsync()
    {
        await CargarPersonas();
    }

    private List<Personas> listarPersonas { get; set; } = new List<Personas>();

    public async Task CargarPersonas()
    {
        if (listarPersonas != null)
        {
            listarPersonas = await PersonasServices.GetListarPersonasAsync();
        }
        else
        {
            shouldRender = true;
        }
    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IPersonasServices PersonasServices { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IHttpClientFactory ClientFactory { get; set; }
    }
}
#pragma warning restore 1591
