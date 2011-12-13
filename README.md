NowJS Connect HTTP Session Injection
--------------------------------------

NOTE: requires now-middleware (https://github.com/ianserlin/now-middleware)

To enable:

<code>
var nowjs = require('now');
require('now-middleware')(nowjs)
require('now-sessions')(nowjs);
</code>


To activate, when you're ready:
-------------------------------

<code>
nowjs.sessions( sessionStore, sessionKey );
</code>

For example:
<pre><code>
// Session Store
var MemoryStore = require('express/node_modules/connect/lib/middleware/session').MemoryStore;
app.SessionStore = new MemoryStore({ reapInterval: 60000 * 10 });

nowjs.sessions(app.SessionStore);
</pre></code>

Parameters are:

* the Connect-compliant SessionStore you are using (really the session store just needs to support the .get() method)
* the connect session key you are using to store the session id in the user's cookie, default is 'connect.sid' if you omit this parameter

