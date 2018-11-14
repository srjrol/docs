(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{272:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Directus has been tested on Apache 2, NGINX, and Caddy. In theory, it should work on any HTTP Server.")]),e._v(" "),r("p",[e._v("The API requires the web server to support URL rewriting for routing the request.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Depending on the HTTP web server you are using, you may need to ensure proper setup for Directus to work as expected. Any edge-case server configurations are outlined below:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Apache 2")]),e._v(" – "),r("router-link",{attrs:{to:"./setup-apache.html"}},[e._v("View Setup Details")])],1),e._v(" "),r("li",[r("strong",[e._v("NGINX")]),e._v(" – "),r("router-link",{attrs:{to:"./setup-nginx.html"}},[e._v("View Setup Details")])],1),e._v(" "),r("li",[r("strong",[e._v("Caddy")]),e._v(" – "),r("router-link",{attrs:{to:"./setup-caddy.html"}},[e._v("View Setup Details")])],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("Directus requires MySQL 5.2+ or any drop-in alternatives such as MariaDB or Percona Server.")]),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("To install Directus you will first need a database and a database-user with access to it. You can create a blank database, or install Directus on an existing database that already has a schema and content.")]),e._v(" "),r("p",[e._v("Directus can manage your database's schema, this requires the user to have privileges to create, alter and drop tables in your database. Also the user must have the privilege to insert, update and delete items in the database.")]),e._v(" "),r("p",[r("router-link",{attrs:{to:"./creating-a-database.html"}},[e._v("Learn more about creating a database")])],1),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("Directus requires PHP 5.6+, though we recommend using the most recent/stable version possible.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("ul",[e._m(10),e._v(" "),e._m(11),e._v(" "),r("li",[r("code",[e._v("gd")]),e._v(" – GD allows the "),r("a",{attrs:{href:"https://github.com/directus/directus-thumbnailer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thumbnailer"),r("OutboundLink")],1),e._v(" to generate images. To add thumbnail support for SVG, PDF, PSD and TIF/TIFF you must also install the "),r("code",[e._v("imagick")]),e._v(" extension.")]),e._v(" "),r("li",[r("code",[e._v("fileinfo")]),e._v(" – Fetches metadata (eg: charset and file-type) and "),r("a",{attrs:{href:"https://iptc.org/standards/photo-metadata/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPTC Info"),r("OutboundLink")],1),e._v(" (eg: location and keywords) for uploaded images.")]),e._v(" "),e._m(12),e._v(" "),e._m(13)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"directus-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directus-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Directus Requirements")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"http-web-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-web-server","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Web Server")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"server-specific"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server-specific","aria-hidden":"true"}},[this._v("#")]),this._v(" Server Specific")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions","aria-hidden":"true"}},[this._v("#")]),this._v(" Permissions")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[e._v("The root directory for Directus API should be "),r("code",[e._v("public")]),e._v(" directory.")]),e._v(" "),r("li",[e._v("Make sure the directory ownership is set to user the web server is running under. Usually the user is "),r("code",[e._v("www-data")]),e._v(" "),r("ul",[r("li",[e._v("eg: "),r("code",[e._v("sudo chown -R www-data:www-data /var/www/api")])])])]),e._v(" "),r("li",[e._v("The following files/folders should have write permission:\n"),r("ul",[r("li",[r("code",[e._v("/logs")])]),e._v(" "),r("li",[r("code",[e._v("/public/uploads")]),e._v(" (or your configured upload directory)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[this._v("#")]),this._v(" Database")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"php-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Extensions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("While most of these PHP extensions are typically included by default, you should confirm that all are installed by checking the "),t("code",[this._v("php.ini")]),this._v(" of your php ("),t("em",[this._v("not CLI")]),this._v(") installation, or using "),t("code",[this._v("phpinfo()")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("pdo")]),this._v(" + "),t("code",[this._v("mysql")]),this._v(" – PHP Data Objects (PDO) enables safer "),t("em",[this._v("parameterized")]),this._v(" queries")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("curl")]),this._v(" – cURL fetches metadata (eg: title and thumbnail) from embed services like YouTube and Vimeo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("mbstring")]),this._v(" – The multibyte string functions helps php to work multibyte encoding. These functions are used by Directus to get the correct string's length or a correct comparison with another string.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("xml")]),this._v(" - Used by PHPUnit (Only required if you are installing PHPUnit)")])}],!1,null,null,null);i.options.__file="requirements.md";t.default=i.exports}}]);