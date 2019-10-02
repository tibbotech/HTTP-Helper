# HTTP Helper

### Introduction<br />

The HTTP Helper library facilitates the submitting of HTTP requests to a server, as well as the processing of the response which is returned.

### Setup<br />

In order to correctly submit a HTTP request, the DNS sockets should first be initialized. This can be achieved by calling `DHCP_DNS_init()`.  

### Usage<br />

#### http_send_request(url, method, interface, data)<br />

This function sends the HTTP request. In the sample code, it is triggered by pressing the MD button, so the function is called in `on_button_pressed`. The function takes the following 4 parameters:

1. **url** - The URL which the request will be sent to.
2. **method** - The type of request to send. The 6 options are:
   1. HTTP_GET
   2. HTTP_HEAD
   3. HTTP_POST
   4. HTTP_PUT
   5. HTTP_DELETE
   6. HTTP_PATCH
3. **interface** - The network interface to use. The 2 options are:
   1. PL_SOCK_INTERFACE_NET
   2. PL_SOCK_INTERFACE_WLN
4. **data** - The data to be sent to the server. Not applicable for HTTP_GET and HTTP_HEAD methods so an empty string should be passed in these cases.<br />

#### get_http_headers()

<br />



#### get_http_content()<br />