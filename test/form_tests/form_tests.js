/* global expect, spyOn, NS */
//http://jasmine.github.io/2.2/introduction.html
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

        inject(function ($controller, $rootScope,
                 $templateCache, $compile) {
            compileRef = $compile;
            templateCacheRef = $templateCache;
            var parentScope = $rootScope.$new();
            var scope = parentScope.$new();
            scopeRef = scope;
            testController =
                    $controller('TestCtrl', {$scope: scope});
            
        });
    });

    ///////form testing//////////////////////////////////////////
    /**
     * this might be used to compose a form and submit it to the controller
     * but it doesn't seem to work
     * @returns {undefined}
     
     it('form should exist', function () {
     
     var templateHtml = templateCacheRef.get('public_html/' +
     'morgue-app/sections/edit-folder/edit-folder.tpl.html')
     
     var formElem = angular.element("<div>" + templateHtml + "</div>")
     //scopeRef.editFolder={};
     //scopeRef.editFolder.newEntry = {};
     //scopeRef.editFolder.newEntry.name = "@@@@@@@@@@BONZO@@@@@@@@@@@@@@"
     var editForm = compileRef(formElem)(scopeRef)
     scopeRef.$apply()
     expect(editForm.$valid).toBeFalsy();
     //editForm.name.$setViewValue('BANANA');
     // console.log(editForm)
     
     
     });
     */


    it('simple test', function () {



        expect(1).toEqual(1);

    });





});

