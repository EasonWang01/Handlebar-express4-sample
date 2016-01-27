# Handlebar-express4-sample
simple demo with no default layout.


origin:https://github.com/ericf/express-handlebars#extnamehandlebars

1.npm install express-handlebars

2.create a views folder put your template xxx.handlebars files in it.

3.If you want a default layout just change this line  and add a layouts folder in views
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

4.Add other files as template and precompile refer to this http://www.adamwadeharris.com/how-to-precompile-handlebars-templates/ 
 
