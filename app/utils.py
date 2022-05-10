from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template

from xhtml2pdf import pisa


def numberCurrencyFormat(number):
	thousands_separator = "."
	fractional_separator = ","

	currency = "{:,.2f}".format(number)

	if thousands_separator == ".":
		main_currency, fractional_currency = currency.split(".")[0], currency.split(".")[1]
		new_main_currency = main_currency.replace(",", ".")
		currency = new_main_currency + fractional_separator + fractional_currency

	return currency

def currencyToFloat(currency):
	return float(currency.replace(".", "").replace(",", "."))

def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html  = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None