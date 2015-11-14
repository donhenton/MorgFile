/* global expect */

//mocking service, providers, etc .... http://www.sitepoint.com/mocking-dependencies-angularjs-tests/
//mocking a form http://stackoverflow.com/questions/25022663/how-to-unit-test-angular-form
//jasmine spy


describe("services/utility_service_tests.js", function () {


    var sampleFolder = {}

    var utilityServiceRef;



    sampleFolder.folder =
            {
                "name": "Space Ships",
                "id": "1",
                "images": {
                    "urls": [
                        "http://orig14.deviantart.net/bf30/f/2009/183/9/b/frigate_zeta_by_karanak.jpg",
                        "http://orig04.deviantart.net/5808/f/2009/180/2/7/frigate_blitz_by_karanak.jpg",
                        "http://orig00.deviantart.net/4603/f/2009/272/0/4/aa_corvette_hufox_by_karanak.jpg",
                        "http://orig09.deviantart.net/5c60/f/2009/140/5/e/battleship_muren_by_karanak.jpg",
                        "http://orig11.deviantart.net/ce72/f/2009/237/b/2/bulldog_light_cruiser_by_karanak.jpg",
                        "http://pre04.deviantart.net/d188/th/pre/f/2009/231/6/3/slim_cruiser_v1_by_ere4s3r.jpg",
                        "http://img14.deviantart.net/a597/i/2008/239/4/b/space_cruiser_by_eastcoastcanuck.jpg",
                        "http://orig03.deviantart.net/9cdd/f/2007/217/d/0/ship_design_by_miggs69.jpg",
                        "http://pre04.deviantart.net/2be7/th/pre/f/2008/247/5/a/infinity_battleship_by_casper87.jpg"
                    ],
                    "pins": [
                        "https://www.pinterest.com/pin/283445370267705999/",
                        "https://www.pinterest.com/pin/568227677958753573/",
                        "https://www.pinterest.com/pin/432416001700829194/",
                        "https://www.pinterest.com/pin/523965737868023562/",
                        "https://www.pinterest.com/pin/525021269033690583/",
                        "https://www.pinterest.com/pin/3096293464750064/"

                    ],
                    "pinterestBoards": [
                        "https://www.pinterest.com/shanewarild/space-gear/",
                        "https://www.pinterest.com/zarquonquintus/art-of-peter-elson/",
                        "https://www.pinterest.com/DjVaderman/john-harris-art/",
                        "https://www.pinterest.com/chrisArnol/spaceship-inspiration/",
                        "https://www.pinterest.com/lycrin/battletech/"

                    ]
                }
            };


    describe('utility service excercises', function () {

        beforeEach(function ()
        {
            module('app');


            inject(function (UtilityService) {

                utilityServiceRef = UtilityService;

            });
        });

        it('utilityService is not null', function () {
            expect(typeof utilityServiceRef === 'undefined').toBe(false);
        });



        it('test isUrlOkay', function () {
            var testurl = "http://www.fred.com";
            expect(utilityServiceRef.isUrlOkay(testurl)).toEqual(true);

            testurl = "www.fred.com";
            expect(utilityServiceRef.isUrlOkay(testurl)).toEqual(true);

            testurl = "bpmodfg";
            expect(utilityServiceRef.isUrlOkay(testurl)).toEqual(false);

        })

        it('checkUrlArray nullinput', function () {
            // var testurl = "http://www.fred.com";
            var testurl;
            var testResult = utilityServiceRef.checkUrlArray(testurl);

            expect(testResult).toEqual({"url": null, "fail": true});

        })

        it('checkUrlArray with 1 fail', function () {
            // var testurl = "http://www.fred.com";
            var testurlArray = ["fred", "www.fred.com"];
            var testResult = utilityServiceRef.checkUrlArray(testurlArray);

            expect(testResult).toEqual({"url": "fred", "fail": true});

        })

        it('checkUrlArray with 0 fail', function () {
            // var testurl = "http://www.fred.com";
            var testurlArray = ["http://zed.com", "www.fred.com"];
            var testResult = utilityServiceRef.checkUrlArray(testurlArray);

            expect(testResult).toEqual({"url": null, "fail": false});

        });

        it('checkUrlArray with empty array', function () {
            // var testurl = "http://www.fred.com";
            var testurlArray = [];
            var testResult = utilityServiceRef.checkUrlArray(testurlArray);

            expect(testResult).toEqual({"url": null, "fail": false});

        });

        it('checkUrlList good string', function () {
            // var testurl = "http://www.fred.com";
            var testurl = "http://fred.com\nhttp://zed.com";
            var testResult = utilityServiceRef.checkUrlList(testurl);

            expect(testResult).toEqual({"url": null, "fail": false});

        });


        it('checkUrlList space', function () {
            // var testurl = "http://www.fred.com";
            var testurl = "http://fred.com\n \nhttp://zed.com";
            var testResult = utilityServiceRef.checkUrlList(testurl);

            expect(testResult).toEqual({"url": ' ', "fail": true});

        });



    })

});
