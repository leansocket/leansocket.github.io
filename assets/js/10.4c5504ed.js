(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(t,e,_){"use strict";_.r(e);var v=_(45),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"authes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#authes"}},[t._v("#")]),t._v(" Authes")]),t._v(" "),_("h2",{attrs:{id:"classes"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"#Token"}},[t._v("Token")])]),t._v(" "),_("p",[t._v("Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。 一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和 安全校验的信息。")])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"#Code"}},[t._v("Code")])]),t._v(" "),_("p",[t._v("验证码此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门 的模块（sms或smtp）进行。")])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"#Key"}},[t._v("Key")])]),t._v(" "),_("p",[t._v("验证键验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一， 即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与 当前这1000个键值都不同。")])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Token"}})]),t._v(" "),_("h2",{attrs:{id:"token"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),_("p",[t._v("Token,这是一个简易的对称加密token工具类。用于实现用户身份的鉴别。 一个典型的token表现为一段被加密的字符串，加密串内含用于身份鉴别和 安全校验的信息。")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": global class")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#Token"}},[t._v("Token")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#new_Token_new"}},[t._v("new Token(secret, timeout)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Token+sign"}},[t._v(".sign()")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Token+make"}},[t._v(".make(data)")]),t._v(" ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Token+check"}},[t._v(".check(token)")]),t._v(" ⇒ "),_("code",[t._v("TokenSession")])])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"new_Token_new"}})]),t._v(" "),_("h3",{attrs:{id:"new-token-secret-timeout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-token-secret-timeout"}},[t._v("#")]),t._v(" new Token(secret, timeout)")]),t._v(" "),_("p",[t._v("构造器")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("secret")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("用于加密的密钥")])]),t._v(" "),_("tr",[_("td",[t._v("timeout")]),t._v(" "),_("td",[_("code",[t._v("number")])]),t._v(" "),_("td",[t._v("token的过期时长，单位为秒。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Token+sign"}})]),t._v(" "),_("h3",{attrs:{id:"token-sign"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#token-sign"}},[t._v("#")]),t._v(" token.sign()")]),t._v(" "),_("p",[t._v("对数据进行签名")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Token"}},[_("code",[t._v("Token")])]),t._v(" "),_("a",{attrs:{name:"Token+make"}})]),t._v(" "),_("h3",{attrs:{id:"token-make-data-⇒-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#token-make-data-⇒-string"}},[t._v("#")]),t._v(" token.make(data) ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("p",[t._v("生成token字符串")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Token"}},[_("code",[t._v("Token")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("string")]),t._v(" - token密文字符串，可以传递给客户端。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[_("code",[t._v("any")])]),t._v(" "),_("td",[t._v("暂存在token中的数据，尽量简短。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Token+check"}})]),t._v(" "),_("h3",{attrs:{id:"token-check-token-⇒-tokensession"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#token-check-token-⇒-tokensession"}},[t._v("#")]),t._v(" token.check(token) ⇒ "),_("code",[t._v("TokenSession")])]),t._v(" "),_("p",[t._v("解密并验证token。如果验证成功，返回token中保存的数据。 如果验证失败，则返回undefined。")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Token"}},[_("code",[t._v("Token")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("TokenSession")]),t._v(" - token的sessio信息")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("token")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("待验证的token字符串")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Code"}})]),t._v(" "),_("h2",{attrs:{id:"code"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),_("p",[t._v("验证码")]),t._v(" "),_("ul",[_("li",[t._v("此类用于创建验证码对象。验证码对象可识别用户操作是否属于本人。")]),t._v(" "),_("li",[t._v("验证码是一串有限长度（通常是4-8个）的数字字符串。验证码生成后可发到用户信任的手机或邮箱。")]),t._v(" "),_("li",[t._v("验证码都有时效性，超时后验证码将会失效，失效的验证码将不会通过检查。")]),t._v(" "),_("li",[t._v("此类只用于生成验证码字符串或检查验证码字符串的合法性。如果期望发送手机短信或邮件需要专门 的模块（sms或smtp）进行。")])]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": global class")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#Code"}},[t._v("Code")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#new_Code_new"}},[t._v("new Code(length, timeout)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Code+make"}},[t._v(".make(type, to)")]),t._v(" ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Code+check"}},[t._v(".check(type, to)")]),t._v(" ⇒ "),_("code",[t._v("CodeSession")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Code+clear"}},[t._v(".clear()")])])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"new_Code_new"}})]),t._v(" "),_("h3",{attrs:{id:"new-code-length-timeout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-code-length-timeout"}},[t._v("#")]),t._v(" new Code(length, timeout)")]),t._v(" "),_("p",[t._v("构造器")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("length")]),t._v(" "),_("td",[_("code",[t._v("number")])]),t._v(" "),_("td",[t._v("验证码的长度，一般为4-8.")])]),t._v(" "),_("tr",[_("td",[t._v("timeout")]),t._v(" "),_("td",[_("code",[t._v("number")])]),t._v(" "),_("td",[t._v("验证码的有效期，单位为秒。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Code+make"}})]),t._v(" "),_("h3",{attrs:{id:"code-make-type-to-⇒-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#code-make-type-to-⇒-string"}},[t._v("#")]),t._v(" code.make(type, to) ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("p",[t._v("生成验证码")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Code"}},[_("code",[t._v("Code")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("string")]),t._v(" - 生成的验证码字符串。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("验证码的发送类型，email")])]),t._v(" "),_("tr",[_("td",[t._v("to")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Code+check"}})]),t._v(" "),_("h3",{attrs:{id:"code-check-type-to-⇒-codesession"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#code-check-type-to-⇒-codesession"}},[t._v("#")]),t._v(" code.check(type, to) ⇒ "),_("code",[t._v("CodeSession")])]),t._v(" "),_("p",[t._v("检查验证码")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Code"}},[_("code",[t._v("Code")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("CodeSession")]),t._v(" - 如果通过检查，返回此发送目标对应验证码的session信息。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("验证码的发送类型，email")])]),t._v(" "),_("tr",[_("td",[t._v("to")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("发送目标，如果验证发的发送类型是email，这里是 对应的邮箱地址，如果验证码发送类型为sms，这里就是对应的手机号码。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Code+clear"}})]),t._v(" "),_("h3",{attrs:{id:"code-clear"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#code-clear"}},[t._v("#")]),t._v(" code.clear()")]),t._v(" "),_("p",[t._v("清空所有验证码，此操作会让暂存的待检查的验证码全部丢失， 后续基于这些验证码的检查操作都会失败。")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Code"}},[_("code",[t._v("Code")])]),t._v(" "),_("a",{attrs:{name:"Key"}})]),t._v(" "),_("h2",{attrs:{id:"key"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),_("p",[t._v("验证键")]),t._v(" "),_("ul",[_("li",[t._v("验证键是一种特殊的验证码。它和普通验证码的区别是能保证唯一性。")]),t._v(" "),_("li",[t._v("这种唯一性不是全局唯一，是在所有已经生成但未检查的编码中的唯一， 即如果现已经生成1000个编码都还未检查也未失效，新生成的验证键值能保证与 当前这1000个键值都不同。")])]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": global class")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#Key"}},[t._v("Key")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#new_Key_new"}},[t._v("new Key(length, timeout)")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Key+make"}},[t._v(".make(data)")]),t._v(" ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Key+check"}},[t._v(".check(key)")]),t._v(" ⇒ "),_("code",[t._v("KeySession")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#Key+clear"}},[t._v(".clear()")])])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"new_Key_new"}})]),t._v(" "),_("h3",{attrs:{id:"new-key-length-timeout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#new-key-length-timeout"}},[t._v("#")]),t._v(" new Key(length, timeout)")]),t._v(" "),_("p",[t._v("构造器")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("length")]),t._v(" "),_("td",[_("code",[t._v("number")])]),t._v(" "),_("td",[t._v("长度，为了保证唯一，在特定的场景可以自行设定。")])]),t._v(" "),_("tr",[_("td",[t._v("timeout")]),t._v(" "),_("td",[_("code",[t._v("number")])]),t._v(" "),_("td",[t._v("有效时长，单位为秒。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Key+make"}})]),t._v(" "),_("h3",{attrs:{id:"key-make-data-⇒-string"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key-make-data-⇒-string"}},[t._v("#")]),t._v(" key.make(data) ⇒ "),_("code",[t._v("string")])]),t._v(" "),_("p",[t._v("生成键值")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Key"}},[_("code",[t._v("Key")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("string")]),t._v(" - 键值字符串")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("data")]),t._v(" "),_("td",[_("code",[t._v("any")])]),t._v(" "),_("td",[t._v("与键值绑定的信息。")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Key+check"}})]),t._v(" "),_("h3",{attrs:{id:"key-check-key-⇒-keysession"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key-check-key-⇒-keysession"}},[t._v("#")]),t._v(" key.check(key) ⇒ "),_("code",[t._v("KeySession")])]),t._v(" "),_("p",[t._v("检查键值")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Key"}},[_("code",[t._v("Key")])]),t._v(" "),_("strong",[t._v("Returns")]),t._v(": "),_("code",[t._v("KeySession")]),t._v(" - 与此键值的session数据，如果检查失败返回undefined。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Param")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[_("code",[t._v("string")])]),t._v(" "),_("td",[t._v("待检查的键值字符串")])])])]),t._v(" "),_("p",[_("a",{attrs:{name:"Key+clear"}})]),t._v(" "),_("h3",{attrs:{id:"key-clear"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#key-clear"}},[t._v("#")]),t._v(" key.clear()")]),t._v(" "),_("p",[t._v("清空所有键值，此操作会让所有已经生成但未检查的键值全部丢失， 后续针对这些键值的检查操作都会失败。")]),t._v(" "),_("p",[_("strong",[t._v("Kind")]),t._v(": instance method of "),_("a",{attrs:{href:"#Key"}},[_("code",[t._v("Key")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);