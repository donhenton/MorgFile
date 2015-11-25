/* global expect, spyOn, NS */
//http://jasmine.github.io/2.2/introduction.html
http://www.sitepoint.com/unit-testing-angularjs-services-controllers-providers/
describe("form_tests.js", function () {
    var sampleFolder = {}
    var testController;
    var utilityServiceRef;
    var folderServiceRef;
    var compileRef;
    var templateCacheRef;
    var scopeRef;





    beforeEach(function ()
    {
        module('app');
        module('formTemplates')
        //this a method for  mocking a factory/service
        module(function ($provide) {
            //$log.debug("BITE ME")
            function testThingFunction()
            {

                function getInfo(d)
                {
                    return "hello " + d;
                }
                var exports = {"getInfo": getInfo};


                return exports;
            }


            $provide.factory('testThing', [testThingFunction]);
        });
        //TestCtrl defined in form_test/app.js
        inject(function ($controller, $rootScope,
                $templateCache, $compile, $log,testThing) {
            compileRef = $compile;
            templateCacheRef = $templateCache;
            var parentScope = $rootScope.$new();
            var scope = parentScope.$new();
            scopeRef = scope;
            //the as tester makes the internals of the controller (vm.*)
            //available outside via scoperef.tester. ........
            testController =
                    $controller('TestCtrl as tester', {$scope: scope, testThing: testThing});

        });
    });

    ///////form testing//////////////////////////////////////////
    /**
     * this might be used to compose a form and submit it to the controller
     * but it doesn't seem to work
     * @returns {undefined}
     */
    it('templates can be processed to forms', function () {

        var templateHtml = templateCacheRef.get('public_html/' +
                'form_test/form.tpl.html')

        var formElem = angular.element("<div>" + templateHtml + "</div>")
        scopeRef.test = {};
        scopeRef.test.testData = {};
        scopeRef.testData = "get a job";
        var editForm = compileRef(formElem)(scopeRef)
        scopeRef.$apply();
        expect(editForm.$valid).toBeFalsy();



    });

    it('interpolation works', function () {

        //angular.element --> jquery $
        var formElem = angular.element("<div>{{test.alpha}}</div>")
        scopeRef.test = {};
        scopeRef.test.alpha = "get a job";
        var editForm = compileRef(formElem)(scopeRef);
        scopeRef.$apply();
        var testText = angular.element(editForm).text();
        expect(testText.indexOf("job") > 1).toEqual(true);



    });

    it('test injecting a service', function () {

       //tester comes from the controller as definition in the inject call      
       var testString = scopeRef.tester.testThing.getInfo("fred");
       expect(testString).toBe("hello fred");
        

    });





});

