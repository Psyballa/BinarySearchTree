/* Compiled by kdc on Sat Jul 13 2013 23:27:04 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/fatihacet/Applications/UMLGenerator.kdapp/app/uml-samples.coffee */
var getActivity, getChart, getClass, getHello, getSequence, getState, getUseCase;

getHello = function() {
  return "Koding -> Developer : Welcome to Koding\n\nKoding <- Developer : Hello Koding\n\nDeveloper -> Friend : Did you see Koding?\n\nFriend -> Koding : Hello Koding\n\nFriend <- Koding : Welcome to Koding\n\nDeveloper <- Friend : Koding is awesome\n\nDeveloper -> Friend : Yes, indeed.";
};

getSequence = function() {
  return "skinparam backgroundColor #EEEBDC\n\nskinparam sequence {\n  ArrowColor DeepSkyBlue\n  ActorBorderColor DeepSkyBlue\n  LifeLineBorderColor blue\n  LifeLineBackgroundColor #A9DCDF\n  \n  ParticipantBorderColor DeepSkyBlue\n  ParticipantBackgroundColor DodgerBlue\n  ParticipantFontName Impact\n  ParticipantFontSize 17\n  ParticipantFontColor #A9DCDF\n  \n  ActorBackgroundColor aqua\n  ActorFontColor DeepSkyBlue\n  ActorFontSize 17\n  ActorFontName Aapex\n}\n\nactor User\nparticipant \"First Class\" as A\nparticipant \"Second Class\" as B\nparticipant \"Last Class\" as C\n\nUser -> A: DoWork\nactivate A\n\nA -> B: Create Request\nactivate B\n\nB -> C: DoWork\nactivate C\nC --> B: WorkDone\ndestroy C\n\nB --> A: Request Created\ndeactivate B\n\nA --> User: Done\ndeactivate A";
};

getClass = function() {
  return "abstract class AbstractList\nabstract AbstractCollection\ninterface List\ninterface Collection\n\nList <|-- AbstractList\nCollection <|-- AbstractCollection\n\nCollection <|- List\nAbstractCollection <|- AbstractList\nAbstractList <|-- ArrayList\n\nclass ArrayList {\n  Object[] elementData\n  size()\n}\n\nenum TimeUnit {\n  DAYS\n  HOURS\n  MINUTES\n}";
};

getActivity = function() {
  return "title Servlet Container\n\n(*) --> \"ClickServlet.handleRequest()\"\n--> \"new Page\"\n\nif \"Page.onSecurityCheck\" then\n  ->[true] \"Page.onInit()\"\n  \n  if \"isForward?\" then\n   ->[no] \"Process controls\"\n   \n   if \"continue processing?\" then\n     -->[yes] ===RENDERING===\n   else\n     -->[no] ===REDIRECT_CHECK===\n   endif\n   \n  else\n   -->[yes] ===RENDERING===\n  endif\n  \n  if \"is Post?\" then\n    -->[yes] \"Page.onPost()\"\n    --> \"Page.onRender()\" as render\n    --> ===REDIRECT_CHECK===\n  else\n    -->[no] \"Page.onGet()\"\n    --> render\n  endif\n  \nelse\n  -->[false] ===REDIRECT_CHECK===\nendif\n\nif \"Do redirect?\" then\n ->[yes] \"redirect request\"\n --> ==BEFORE_DESTROY===\nelse\n if \"Do Forward?\" then\n  -left->[yes] \"Forward request\"\n  --> ==BEFORE_DESTROY===\n else\n  -right->[no] \"Render page template\"\n  --> ==BEFORE_DESTROY===\n endif\nendif\n\n--> \"Page.onDestroy()\"\n-->(*)";
};

getUseCase = function() {
  return "left to right direction\nskinparam packageStyle rect\nactor customer\nactor clerk\nrectangle checkout {\n  customer -- (checkout)\n  (checkout) .> (payment) : include\n  (help) .> (checkout) : extends\n  (checkout) -- clerk\n}";
};

getState = function() {
  return "scale 600 width\n\n[*] -> State1\nState1 --> State2 : Succeeded\nState1 --> [*] : Aborted\nState2 --> State3 : Succeeded\nState2 --> [*] : Aborted\nstate State3 {\n  state \"Long State Name\" as long1\n  long1 : Just a test\n  [*] --> long1\n  long1 --> long1 : New Data\n  long1 --> ProcessData : Enough Data\n}\nState3 --> State3 : Failed\nState3 --> [*] : Succeeded / Save Result\nState3 --> [*] : Aborted";
};

getChart = function() {
  return "@startjcckit(600,300)\ndata/curves = c1 c2 c3\ndata/c1/y = 1998 1999 2000 2001 2002\ndata/c1/x = 31 32 44 61 55\ndata/c2/y = 1998 1999 2000 2001 2002\ndata/c2/x = 54 59 50 31 38\ndata/c3/y = 1998 1999 2000 2001 2002\ndata/c3/x = 15  9  6  8  7\nbackground = 0xffffff\ndefaultCoordinateSystem/ticLabelFormat = %d\ndefaultCoordinateSystem/ticLabelAttributes/fontSize = 0.03\ndefaultCoordinateSystem/axisLabelAttributes/fontSize = 0.04\ndefaultCoordinateSystem/axisLabelAttributes/fontStyle = bold\nplot/coordinateSystem/xAxis/ = defaultCoordinateSystem/\nplot/coordinateSystem/xAxis/axisLabel =  \nplot/coordinateSystem/xAxis/ticLabelFormat = %d%% \nplot/coordinateSystem/xAxis/grid = true\nplot/coordinateSystem/xAxis/minimum = 0\nplot/coordinateSystem/xAxis/maximum = 100\nplot/coordinateSystem/yAxis/ = defaultCoordinateSystem/\nplot/coordinateSystem/yAxis/axisLabel = year\nplot/coordinateSystem/yAxis/minimum = 2002.5\nplot/coordinateSystem/yAxis/maximum = 1997.5\nplot/initialHintForNextCurve/className = jcckit.plot.PositionHint\nplot/initialHintForNextCurve/position = 0.15 0\ndefaultDefinition/symbolFactory/className = jcckit.plot.BarFactory\ndefaultDefinition/symbolFactory/stacked = true\ndefaultDefinition/symbolFactory/size = 0.07\ndefaultDefinition/symbolFactory/horizontalBars = true\ndefaultDefinition/symbolFactory/attributes/className = jcckit.graphic.BasicGraphicAttributes\ndefaultDefinition/symbolFactory/attributes/lineColor = 0\ndefaultDefinition/withLine = false\nplot/curveFactory/definitions = def1 def2 def3\nplot/curveFactory/def1/ = defaultDefinition/\nplot/curveFactory/def1/symbolFactory/attributes/fillColor = 0xcaff\nplot/curveFactory/def2/ = defaultDefinition/\nplot/curveFactory/def2/symbolFactory/attributes/fillColor = 0xffca00\nplot/curveFactory/def3/ = defaultDefinition/\nplot/curveFactory/def3/symbolFactory/attributes/fillColor = 0xa0ff80\nplot/legendVisible = false\n@endjcckit";
};
/* BLOCK STARTS: /home/fatihacet/Applications/UMLGenerator.kdapp/app/main.coffee */
var UMLGenerator, defaultVmName, nickname, timestamp,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

nickname = KD.whoami().profile.nickname;

defaultVmName = KD.getSingleton("vmController").defaultVmName;

timestamp = Date.now();

UMLGenerator = (function(_super) {
  __extends(UMLGenerator, _super);

  function UMLGenerator(options, data) {
    var windowController,
      _this = this;
    if (options == null) {
      options = {};
    }
    options.cssClass = "uml-generator";
    UMLGenerator.__super__.constructor.call(this, options, data);
    this.on("generateMenuItemClicked", function() {
      return _this.generateUML();
    });
    this.on("resetMenuItemClicked", function() {
      return _this.reset();
    });
    this.on("saveCodeMenuItemClicked", function() {
      return _this.saveCode();
    });
    this.on("saveOutputMenuItemClicked", function() {
      return _this.saveUML();
    });
    this.on("aboutMenuItemClicked", function() {
      return _this.showAbout();
    });
    this.on("docMenuItemClicked", function() {
      return _this.showDocumentation();
    });
    this.on("samplesMenuItemClicked", function() {
      return _this.showSamples();
    });
    this.ace = options.ace;
    this.UMLImagePath = KD.utils.proxifyUrl("http://www.plantuml.com/plantuml/img/SqajIyt9BqWjKj2rK_3EJydCIrUmKl18pSd9XtAvk5pWQcnq4Mh2KtEIytDJ5KgmAGGQvbQKcPgN0bJebP-P1rALM9vQ3D80KmrL00IuhKQe8Tfge4AurOueLYfa5iCS0G00");
    this.sampleUMLImagePath = this.UMLImagePath;
    this.sampleUMLCode = getHello();
    this.aceView = new KDView;
    this.umlView = new KDView({
      cssClass: "uml-generator-image",
      partial: "<img id=\"uml\" src=\"" + this.UMLImagePath + "\" />"
    });
    this.umlView.addSubView(this.loader = new KDLoaderView({
      size: {
        width: 30
      }
    }));
    this.baseView = new KDSplitView({
      resizable: true,
      sizes: ["50%", null],
      views: [this.aceView, this.umlView]
    });
    this.aceEditor = this.ace.edit(this.aceView.domElement[0]);
    this.editorSession = this.aceEditor.getSession();
    this.editorSession.setMode("ace/mode/text");
    this.editorSession.setValue(this.sampleUMLCode);
    this.aceEditor.setTheme("ace/theme/monokai");
    this.aceEditor.commands.addCommand({
      name: "find",
      bindKey: {
        win: "Ctrl-S",
        mac: "Command-S"
      },
      exec: function() {
        return _this.generateUML();
      }
    });
    this.baseView.addSubView(this.dropTarget = new KDView({
      cssClass: "uml-generator-drop-target",
      bind: "dragstart dragend dragover drop dragenter dragleave"
    }));
    this.dropTarget.hide();
    this.dropTarget.on("drop", function(e) {
      return _this.open(e.originalEvent.dataTransfer.getData("Text"));
    });
    windowController = KD.getSingleton("windowController");
    windowController.on("DragEnterOnWindow", function() {
      return _this.dropTarget.show();
    });
    windowController.on("DragExitOnWindow", function() {
      return _this.dropTarget.hide();
    });
    this.createHookFile();
  }

  UMLGenerator.prototype.saveUML = function() {
    var _this = this;
    return this.openSaveDialog(function() {
      var fileName, filePath;
      filePath = "Documents/UMLGenerator";
      fileName = "" + (_this.inputFileName.getValue()) + ".jpg";
      return _this.doKiteRequest("mkdir -p " + filePath + " ; cd " + filePath + " ; curl -o \"" + fileName + "\" " + _this.UMLImagePath, function(res) {
        new KDNotificationView({
          type: "mini",
          title: "Your UML diagram has been saved into ~/Documents/UMLGenerator.",
          cssClass: "success"
        });
        return _this.saveDialog.hide();
      });
    });
  };

  UMLGenerator.prototype.saveCode = function() {
    var _this = this;
    return this.openSaveDialog(function() {
      var fileName, filePath;
      filePath = "Documents/UMLGenerator";
      fileName = "" + (_this.inputFileName.getValue()) + ".uml";
      return _this.doKiteRequest("mkdir -p " + filePath + " ; cd " + filePath, function(res) {
        var file;
        file = FSHelper.createFileFromPath("" + filePath + "/" + fileName);
        return file.save(_this.editorSession.getValue(), function(err, res) {
          new KDNotificationView({
            type: "mini",
            cssClass: "success",
            title: "Your UML code has been saved into ~/Documents/UMLGenerator."
          });
          return _this.saveDialog.hide();
        });
      });
    });
  };

  UMLGenerator.prototype.reset = function() {
    this.editorSession.setValue(this.sampleUMLCode);
    document.getElementById("uml").setAttribute("src", this.sampleUMLImagePath);
    return this.UMLImagePath = this.sampleUMLImagePath;
  };

  UMLGenerator.prototype.open = function(path) {
    var ext,
      _this = this;
    ext = FSFile.getFileExtension(path);
    if (ext !== "uml") {
      return new KDNotificationView({
        type: "mini",
        cssClass: "error",
        title: "Dropped item must have .uml extension",
        duration: 3000
      });
    } else {
      return this.doKiteRequest("cat " + (FSHelper.plainPath(path)), function(res) {
        return _this.openUML(res);
      });
    }
  };

  UMLGenerator.prototype.openUML = function(umlCode) {
    this.editorSession.setValue(umlCode);
    return this.generateUML();
  };

  UMLGenerator.prototype.openSaveDialog = function(callback) {
    var form, inputFileName, labelFileName, saveDialog, wrapper,
      _this = this;
    this.addSubView(this.saveDialog = saveDialog = new KDDialogView({
      cssClass: "save-as-dialog",
      duration: 200,
      topOffset: 0,
      overlay: true,
      height: "auto",
      buttons: {
        Save: {
          style: "modal-clean-gray",
          callback: function() {
            return callback(_this.inputFileName.getValue());
          }
        },
        Cancel: {
          style: "modal-cancel",
          callback: function() {
            return saveDialog.hide();
          }
        }
      }
    }));
    saveDialog.addSubView(wrapper = new KDView({
      cssClass: "kddialog-wrapper"
    }));
    wrapper.addSubView(form = new KDFormView);
    form.addSubView(labelFileName = new KDLabelView({
      title: "Filename: (file will be saved into ~/Documents/UMLGenerator/)"
    }));
    form.addSubView(this.inputFileName = inputFileName = new KDInputView({
      label: labelFileName,
      defaultValue: "my-uml"
    }));
    saveDialog.show();
    return inputFileName.setFocus();
  };

  UMLGenerator.prototype.generateUML = function() {
    var _this = this;
    this.loader.show();
    this.umlView.addSubView(this.loaderView = new KDView({
      cssClass: "uml-generator-loader-view"
    }));
    return this.doKiteRequest("wget -qO- --post-data=\"img=" + (this.editorSession.getValue().replace(/[\r\n]/g, "\\n")) + "\" http://" + defaultVmName + "/.applications/umlgen/umlgen-hook.php", function(res) {
      document.getElementById("uml").setAttribute("src", KD.utils.proxifyUrl(res));
      _this.UMLImagePath = res;
      return KD.utils.wait(1000, function() {
        _this.loader.hide();
        return _this.loaderView.destroy();
      });
    });
  };

  UMLGenerator.prototype.showAbout = function() {
    return new KDModalView({
      title: "About",
      cssClass: "uml-generator-about",
      overlay: true,
      content: "<h3>About UML</h3>\n<p>\n  <strong>Unified Modeling Language (UML)</strong> is a standardized general-purpose modeling language in the field of object-oriented software engineering. \n  The Unified Modeling Language includes a set of graphic notation techniques to create visual models of object-oriented software-intensive systems.\n</p>\n<p>\n  This application uses PlantUML as a service. You can find the details at <a href=\"http://d.pr/mxgO\" target=\"_blank\">PlantUML's home page</a>. If you need more documentation \n  about PlantUML, you can download <a href=\"http://d.pr/f/wyeB\" target=\"_blank\">PlantUML Language Reference Guide</a>.\n</p>\n<h3>About Application</h3>\n<p>Using this application, you can easily create and save UML diagrams to your Koding directory. UML diagrams will be saved under ~/Documents/UMLGenerator.\nYou can save UML code as well. Also you can regenerate your UML from your saved UML code by dragging .uml file over the editor. \nYou can try sample UML codes by using \"Sample UML Diagrams\" menu button.</p>\n<p>Feel free to fork and contribute on Github. <a href=\"http://d.pr/qQDn\" target=\"_blank\">Here</a> is the Github repo of the application.</p>"
    });
  };

  UMLGenerator.prototype.showDocumentation = function() {
    return new KDNotificationView({
      title: "Documentation will be added soon!",
      type: "mini"
    });
  };

  UMLGenerator.prototype.showSamples = function() {
    return new KDNotificationView({
      title: "Sample diagrams will be added soon!",
      type: "mini"
    });
  };

  UMLGenerator.prototype.doKiteRequest = function(command, callback) {
    var _this = this;
    return KD.getSingleton('kiteController').run(command, function(err, res) {
      var _ref, _ref1;
      if (!err) {
        if (callback) {
          return callback(res);
        }
      } else {
        new KDNotificationView({
          title: "An error occured while processing your request, try again please!",
          type: "mini",
          cssClass: "error",
          duration: 3000
        });
        if ((_ref = _this.loader) != null) {
          _ref.hide();
        }
        return (_ref1 = _this.loaderView) != null ? _ref1.destroy() : void 0;
      }
    });
  };

  UMLGenerator.prototype.createHookFile = function() {
    return this.doKiteRequest("mkdir -p Web/.applications/umlgen", function(res) {
      var hookFile;
      hookFile = FSHelper.createFileFromPath("Web/.applications/umlgen/umlgen-hook.php");
      return hookFile.save(UMLGenerator.hookFileContent, function(err, res) {
        var modal;
        if (err) {
          return modal = new KDBlockingModalView({
            title: "Something wrong",
            overlay: true,
            content: "<p>Sorry but, UMLGenerator app couldn't create hook file that will help you to create UML diagrams. This means you cannot save your UML diagrams. You can report this issue to app author.</p>",
            buttons: {
              OK: {
                title: "Close the app",
                cssClass: "clean-gray",
                callback: function() {
                  var appManager;
                  appManager = KD.getSingleton("appManager");
                  return appManager.quit(appManager.frontApp);
                }
              }
            }
          });
        }
      });
    });
  };

  UMLGenerator.prototype.pistachio = function() {
    return "{{> this.baseView}}";
  };

  return UMLGenerator;

})(JView);

UMLGenerator.hookFileContent = "<?php \n\nfunction encodep($text) { \n     $data = utf8_encode($text); \n     $compressed = gzdeflate($data, 9); \n     return encode64($compressed); \n} \n\nfunction encode6bit($b) { \n     if ($b < 10) { \n          return chr(48 + $b); \n     } \n     $b -= 10; \n     if ($b < 26) { \n          return chr(65 + $b); \n     } \n     $b -= 26; \n     if ($b < 26) { \n          return chr(97 + $b); \n     } \n     $b -= 26; \n     if ($b == 0) { \n          return '-'; \n     } \n     if ($b == 1) { \n          return '_'; \n     } \n     return '?'; \n} \n\nfunction append3bytes($b1, $b2, $b3) { \n     $c1 = $b1 >> 2; \n     $c2 = (($b1 & 0x3) << 4) | ($b2 >> 4); \n     $c3 = (($b2 & 0xF) << 2) | ($b3 >> 6); \n     $c4 = $b3 & 0x3F; \n     $r = \"\"; \n     $r .= encode6bit($c1 & 0x3F); \n     $r .= encode6bit($c2 & 0x3F); \n     $r .= encode6bit($c3 & 0x3F); \n     $r .= encode6bit($c4 & 0x3F); \n     return $r; \n} \n\nfunction encode64($c) { \n     $str = \"\"; \n     $len = strlen($c); \n     for ($i = 0; $i < $len; $i+=3) { \n            if ($i+2==$len) { \n                  $str .= append3bytes(ord(substr($c, $i, 1)), ord(substr($c, $i+1, 1)), 0); \n            } else if ($i+1==$len) { \n                  $str .= append3bytes(ord(substr($c, $i, 1)), 0, 0); \n            } else { \n                  $str .= append3bytes(ord(substr($c, $i, 1)), ord(substr($c, $i+1, 1)), ord(substr($c, $i+2, 1))); \n            } \n     } \n     return $str; \n} \n\n$path = \"https://koding.com/-/imageProxy?url=http://www.plantuml.com/plantuml/img/\"; \n\n\n$path .= encodep(str_replace('\\n', \"\\n\", $_POST['img'])); \n\necho $path;\n\n?> ";
/* BLOCK STARTS: /home/fatihacet/Applications/UMLGenerator.kdapp/index.coffee */
require(["ace/ace"], function(Ace) {
  var menuItems, umlGenerator,
    _this = this;
  umlGenerator = new UMLGenerator({
    ace: Ace
  });
  appView.addSubView(umlGenerator);
  menuItems = ["generate", "reset", "saveCode", "saveOutput", "samples", "doc", "about"];
  return menuItems.forEach(function(item) {
    var eventName;
    eventName = "" + item + "MenuItemClicked";
    return appView.on(eventName, function() {
      return umlGenerator.emit(eventName);
    });
  });
});

/* KDAPP ENDS */
}).call();