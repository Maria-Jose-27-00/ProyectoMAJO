import json
from django.http.response import JsonResponse
from django.views import View
from .models import Company
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt



# Create your views here.

class CompanyView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
  
    def post(self, request):
        js =  json.loads(request.body)
        if(js['tipo']=="obtenerDatos"):
            listado = list(Company.objects.values())  #estoy pensando la consulta
            datoEnfermos=[]
            datosDecesos =[]
            mes=''
            for reg in listado:
                for dato, valor in reg.items():   #ya se me había olvidado listas en python esto se vio en tercer semestre  pOO
                    if dato == 'mes':
                        mes = valor
                    else:
                        if dato == "Nodepersonasenfermas":
                            datoEnfermos.append({'name': mes, 'value':valor}) 
                        else:
                            if dato == "decesos":
                                datosDecesos.append({'name': mes, 'value':valor}) 
            
            datos ={'datos': [{
                            'name': "Enfermos",
                            'series': datoEnfermos
                        },
                        {
                            'name': "Decesos",
                            'series': datosDecesos
                        }
                    ]
            }
            print ((datos))
            mensaje = {'respuesta':"ya se respondió el servidor"}
            return JsonResponse(datos)
