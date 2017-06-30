var dataManagement = angular.module('directPortalApp.datamanagement', []);

dataManagement.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.datamanagement', {
            url: '/datamanagement',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.approval', {
            url: '/approval',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.approval.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/approval/index.html',
            controller: 'approvalController'
        })
        .state('app.datamanagement.approval.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/approval/create.html',
            controller: 'createapprovalController'
        })
        .state('app.datamanagement.approval.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/approval/edit.html',
            controller: 'editapprovalController'
        })
        .state('app.datamanagement.building', {
            url: '/building',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.building.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/building/index.html',
            controller: 'buildingController'
        })
        .state('app.datamanagement.building.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/building/create.html',
            controller: 'createbuildingController'
        })
        .state('app.datamanagement.building.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/building/edit.html',
            controller: 'editbuildingController'
        })
        .state('app.datamanagement.buildingphase', {
            url: '/buildingphase',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.buildingphase.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/buildingphase/index.html',
            controller: 'buildingphaseController'
        })
        .state('app.datamanagement.buildingphase.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/buildingphase/create.html',
            controller: 'createbuildingphaseController'
        })
        .state('app.datamanagement.buildingphase.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/buildingphase/edit.html',
            controller: 'editbuildingphaseController'
        })
        .state('app.datamanagement.buildingstatus', {
            url: '/buildingstatus',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.buildingstatus.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatus/index.html',
            controller: 'buildingstatusController'
        })
        .state('app.datamanagement.buildingstatus.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatus/create.html',
            controller: 'createbuildingstatusController'
        })
        .state('app.datamanagement.buildingstatus.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatus/edit.html',
            controller: 'editbuildingstatusController'
        })
        .state('app.datamanagement.buildingstatustype', {
            url: '/buildingstatustype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.buildingstatustype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatustype/index.html',
            controller: 'buildingstatustypeController'
        })
        .state('app.datamanagement.buildingstatustype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatustype/create.html',
            controller: 'createbuildingstatustypeController'
        })
        .state('app.datamanagement.buildingstatustype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/buildingstatustype/edit.html',
            controller: 'editbuildingstatustypeController'
        })
        .state('app.datamanagement.calendarevent', {
            url: '/calendarevent',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.calendarevent.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/calendarevent/index.html',
            controller: 'calendareventController'
        })
        .state('app.datamanagement.calendarevent.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/calendarevent/create.html',
            controller: 'createcalendareventController'
        })
        .state('app.datamanagement.calendarevent.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/calendarevent/edit.html',
            controller: 'editcalendareventController'
        })
        .state('app.datamanagement.complex', {
            url: '/complex',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.complex.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/complex/index.html',
            controller: 'complexController'
        })
        .state('app.datamanagement.complex.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/complex/create.html',
            controller: 'createcomplexController'
        })
        .state('app.datamanagement.complex.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/complex/edit.html',
            controller: 'editcomplexController'
        })
        .state('app.datamanagement.configuration', {
            url: '/configuration',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.configuration.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/configuration/index.html',
            controller: 'configurationController'
        })
        .state('app.datamanagement.configuration.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/configuration/create.html',
            controller: 'createconfigurationController'
        })
        .state('app.datamanagement.configuration.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/configuration/edit.html',
            controller: 'editconfigurationController'
        })
        .state('app.datamanagement.contactaddress', {
            url: '/contactaddress',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contactaddress.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contactaddress/index.html',
            controller: 'contactaddressController'
        })
        .state('app.datamanagement.contactaddress.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contactaddress/create.html',
            controller: 'createcontactaddressController'
        })
        .state('app.datamanagement.contactaddress.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contactaddress/edit.html',
            controller: 'editcontactaddressController'
        })
        .state('app.datamanagement.contactaddresstype', {
            url: '/contactaddresstype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contactaddresstype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contactaddresstype/index.html',
            controller: 'contactaddresstypeController'
        })
        .state('app.datamanagement.contactaddresstype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contactaddresstype/create.html',
            controller: 'createcontactaddresstypeController'
        })
        .state('app.datamanagement.contactaddresstype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contactaddresstype/edit.html',
            controller: 'editcontactaddresstypeController'
        })
        .state('app.datamanagement.contactdetail', {
            url: '/contactdetail',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contactdetail.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contactdetail/index.html',
            controller: 'contactdetailController'
        })
        .state('app.datamanagement.contactdetail.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contactdetail/create.html',
            controller: 'createcontactdetailController'
        })
        .state('app.datamanagement.contactdetail.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contactdetail/edit.html',
            controller: 'editcontactdetailController'
        })
        .state('app.datamanagement.contactdetailtype', {
            url: '/contactdetailtype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contactdetailtype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contactdetailtype/index.html',
            controller: 'contactdetailtypeController'
        })
        .state('app.datamanagement.contactdetailtype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contactdetailtype/create.html',
            controller: 'createcontactdetailtypeController'
        })
        .state('app.datamanagement.contactdetailtype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contactdetailtype/edit.html',
            controller: 'editcontactdetailtypeController'
        })
        .state('app.datamanagement.contract', {
            url: '/contract',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contract.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contract/index.html',
            controller: 'contractController'
        })
        .state('app.datamanagement.contract.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contract/create.html',
            controller: 'createcontractController'
        })
        .state('app.datamanagement.contract.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contract/edit.html',
            controller: 'editcontractController'
        })
        .state('app.datamanagement.contractdetail', {
            url: '/contractdetail',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contractdetail.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contractdetail/index.html',
            controller: 'contractdetailController'
        })
        .state('app.datamanagement.contractdetail.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contractdetail/create.html',
            controller: 'createcontractdetailController'
        })
        .state('app.datamanagement.contractdetail.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contractdetail/edit.html',
            controller: 'editcontractdetailController'
        })
        .state('app.datamanagement.contractdetailtype', {
            url: '/contractdetailtype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.contractdetailtype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/contractdetailtype/index.html',
            controller: 'contractdetailtypeController'
        })
        .state('app.datamanagement.contractdetailtype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/contractdetailtype/create.html',
            controller: 'createcontractdetailtypeController'
        })
        .state('app.datamanagement.contractdetailtype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/contractdetailtype/edit.html',
            controller: 'editcontractdetailtypeController'
        })
        .state('app.datamanagement.country', {
            url: '/country',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.country.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/country/index.html',
            controller: 'countryController'
        })
        .state('app.datamanagement.country.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/country/create.html',
            controller: 'createcountryController'
        })
        .state('app.datamanagement.country.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/country/edit.html',
            controller: 'editcountryController'
        })
        .state('app.datamanagement.developer', {
            url: '/developer',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.developer.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/developer/index.html',
            controller: 'developerController'
        })
        .state('app.datamanagement.developer.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/developer/create.html',
            controller: 'createdeveloperController'
        })
        .state('app.datamanagement.developer.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/developer/edit.html',
            controller: 'editdeveloperController'
        })
        .state('app.datamanagement.document', {
            url: '/document',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.document.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/document/index.html',
            controller: 'documentController'
        })
        .state('app.datamanagement.document.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/document/create.html',
            controller: 'createdocumentController'
        })
        .state('app.datamanagement.document.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/document/edit.html',
            controller: 'editdocumentController'
        })
        .state('app.datamanagement.documenttype', {
            url: '/documenttype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.documenttype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/documenttype/index.html',
            controller: 'documenttypeController'
        })
        .state('app.datamanagement.documenttype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/documenttype/create.html',
            controller: 'createdocumenttypeController'
        })
        .state('app.datamanagement.documenttype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/documenttype/edit.html',
            controller: 'editdocumenttypeController'
        })
        .state('app.datamanagement.entity', {
            url: '/entity',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.entity.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/entity/index.html',
            controller: 'entityController'
        })
        .state('app.datamanagement.entity.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/entity/create.html',
            controller: 'createentityController'
        })
        .state('app.datamanagement.entity.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/entity/edit.html',
            controller: 'editentityController'
        })
        .state('app.datamanagement.entityproperty', {
            url: '/entityproperty',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.entityproperty.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/entityproperty/index.html',
            controller: 'entitypropertyController'
        })
        .state('app.datamanagement.entityproperty.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/entityproperty/create.html',
            controller: 'createentitypropertyController'
        })
        .state('app.datamanagement.entityproperty.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/entityproperty/edit.html',
            controller: 'editentitypropertyController'
        })
        .state('app.datamanagement.entitytype', {
            url: '/entitytype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.entitytype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/entitytype/index.html',
            controller: 'entitytypeController'
        })
        .state('app.datamanagement.entitytype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/entitytype/create.html',
            controller: 'createentitytypeController'
        })
        .state('app.datamanagement.entitytype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/entitytype/edit.html',
            controller: 'editentitytypeController'
        })
        .state('app.datamanagement.feature', {
            url: '/feature',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.feature.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/feature/index.html',
            controller: 'featureController'
        })
        .state('app.datamanagement.feature.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/feature/create.html',
            controller: 'createfeatureController'
        })
        .state('app.datamanagement.feature.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/feature/edit.html',
            controller: 'editfeatureController'
        })
        .state('app.datamanagement.featuretype', {
            url: '/featuretype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.featuretype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/featuretype/index.html',
            controller: 'featuretypeController'
        })
        .state('app.datamanagement.featuretype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/featuretype/create.html',
            controller: 'createfeaturetypeController'
        })
        .state('app.datamanagement.featuretype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/featuretype/edit.html',
            controller: 'editfeaturetypeController'
        })
        .state('app.datamanagement.floorplan', {
            url: '/floorplan',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.floorplan.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/floorplan/index.html',
            controller: 'floorplanController'
        })
        .state('app.datamanagement.floorplan.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/floorplan/create.html',
            controller: 'createfloorplanController'
        })
        .state('app.datamanagement.floorplan.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/floorplan/edit.html',
            controller: 'editfloorplanController'
        })
        .state('app.datamanagement.language', {
            url: '/language',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.language.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/language/index.html',
            controller: 'languageController'
        })
        .state('app.datamanagement.language.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/language/create.html',
            controller: 'createlanguageController'
        })
        .state('app.datamanagement.language.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/language/edit.html',
            controller: 'editlanguageController'
        })
        .state('app.datamanagement.marketingmaterial', {
            url: '/marketingmaterial',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.marketingmaterial.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterial/index.html',
            controller: 'marketingmaterialController'
        })
        .state('app.datamanagement.marketingmaterial.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterial/create.html',
            controller: 'createmarketingmaterialController'
        })
        .state('app.datamanagement.marketingmaterial.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterial/edit.html',
            controller: 'editmarketingmaterialController'
        })
        .state('app.datamanagement.marketingmaterialtype', {
            url: '/marketingmaterialtype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.marketingmaterialtype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterialtype/index.html',
            controller: 'marketingmaterialtypeController'
        })
        .state('app.datamanagement.marketingmaterialtype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterialtype/create.html',
            controller: 'createmarketingmaterialtypeController'
        })
        .state('app.datamanagement.marketingmaterialtype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/marketingmaterialtype/edit.html',
            controller: 'editmarketingmaterialtypeController'
        })
        .state('app.datamanagement.message', {
            url: '/message',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.message.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/message/index.html',
            controller: 'messageController'
        })
        .state('app.datamanagement.message.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/message/create.html',
            controller: 'createmessageController'
        })
        .state('app.datamanagement.message.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/message/edit.html',
            controller: 'editmessageController'
        })
        .state('app.datamanagement.nationality', {
            url: '/nationality',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.nationality.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/nationality/index.html',
            controller: 'nationalityController'
        })
        .state('app.datamanagement.nationality.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/nationality/create.html',
            controller: 'createnationalityController'
        })
        .state('app.datamanagement.nationality.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/nationality/edit.html',
            controller: 'editnationalityController'
        })
        .state('app.datamanagement.note', {
            url: '/note',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.note.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/note/index.html',
            controller: 'noteController'
        })
        .state('app.datamanagement.note.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/note/create.html',
            controller: 'createnoteController'
        })
        .state('app.datamanagement.note.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/note/edit.html',
            controller: 'editnoteController'
        })
        .state('app.datamanagement.notification', {
            url: '/notification',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.notification.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/notification/index.html',
            controller: 'notificationController'
        })
        .state('app.datamanagement.notification.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/notification/create.html',
            controller: 'createnotificationController'
        })
        .state('app.datamanagement.notification.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/notification/edit.html',
            controller: 'editnotificationController'
        })
        .state('app.datamanagement.organizationunit', {
            url: '/organizationunit',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.organizationunit.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/organizationunit/index.html',
            controller: 'organizationunitController'
        })
        .state('app.datamanagement.organizationunit.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/organizationunit/create.html',
            controller: 'createorganizationunitController'
        })
        .state('app.datamanagement.organizationunit.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/organizationunit/edit.html',
            controller: 'editorganizationunitController'
        })
        .state('app.datamanagement.organizationunitstatus', {
            url: '/organizationunitstatus',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.organizationunitstatus.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/organizationunitstatus/index.html',
            controller: 'organizationunitstatusController'
        })
        .state('app.datamanagement.organizationunitstatus.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/organizationunitstatus/create.html',
            controller: 'createorganizationunitstatusController'
        })
        .state('app.datamanagement.organizationunitstatus.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/organizationunitstatus/edit.html',
            controller: 'editorganizationunitstatusController'
        })
        .state('app.datamanagement.organizationunittype', {
            url: '/organizationunittype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.organizationunittype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/organizationunittype/index.html',
            controller: 'organizationunittypeController'
        })
        .state('app.datamanagement.organizationunittype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/organizationunittype/create.html',
            controller: 'createorganizationunittypeController'
        })
        .state('app.datamanagement.organizationunittype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/organizationunittype/edit.html',
            controller: 'editorganizationunittypeController'
        })
        .state('app.datamanagement.ownershiptype', {
            url: '/ownershiptype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.ownershiptype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/ownershiptype/index.html',
            controller: 'ownershiptypeController'
        })
        .state('app.datamanagement.ownershiptype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/ownershiptype/create.html',
            controller: 'createownershiptypeController'
        })
        .state('app.datamanagement.ownershiptype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/ownershiptype/edit.html',
            controller: 'editownershiptypeController'
        })
        .state('app.datamanagement.payment', {
            url: '/payment',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.payment.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/payment/index.html',
            controller: 'paymentController'
        })
        .state('app.datamanagement.payment.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/payment/create.html',
            controller: 'createpaymentController'
        })
        .state('app.datamanagement.payment.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/payment/edit.html',
            controller: 'editpaymentController'
        })
        .state('app.datamanagement.paymentmethod', {
            url: '/paymentmethod',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.paymentmethod.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/paymentmethod/index.html',
            controller: 'paymentmethodController'
        })
        .state('app.datamanagement.paymentmethod.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/paymentmethod/create.html',
            controller: 'createpaymentmethodController'
        })
        .state('app.datamanagement.paymentmethod.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/paymentmethod/edit.html',
            controller: 'editpaymentmethodController'
        })
        .state('app.datamanagement.paymentpart', {
            url: '/paymentpart',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.paymentpart.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/paymentpart/index.html',
            controller: 'paymentpartController'
        })
        .state('app.datamanagement.paymentpart.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/paymentpart/create.html',
            controller: 'createpaymentpartController'
        })
        .state('app.datamanagement.paymentpart.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/paymentpart/edit.html',
            controller: 'editpaymentpartController'
        })
        .state('app.datamanagement.paymenttype', {
            url: '/paymenttype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.paymenttype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/paymenttype/index.html',
            controller: 'paymenttypeController'
        })
        .state('app.datamanagement.paymenttype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/paymenttype/create.html',
            controller: 'createpaymenttypeController'
        })
        .state('app.datamanagement.paymenttype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/paymenttype/edit.html',
            controller: 'editpaymenttypeController'
        })
        .state('app.datamanagement.performanceindicator', {
            url: '/performanceindicator',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.performanceindicator.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicator/index.html',
            controller: 'performanceindicatorController'
        })
        .state('app.datamanagement.performanceindicator.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicator/create.html',
            controller: 'createperformanceindicatorController'
        })
        .state('app.datamanagement.performanceindicator.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicator/edit.html',
            controller: 'editperformanceindicatorController'
        })
        .state('app.datamanagement.performanceindicatortype', {
            url: '/performanceindicatortype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.performanceindicatortype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicatortype/index.html',
            controller: 'performanceindicatortypeController'
        })
        .state('app.datamanagement.performanceindicatortype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicatortype/create.html',
            controller: 'createperformanceindicatortypeController'
        })
        .state('app.datamanagement.performanceindicatortype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/performanceindicatortype/edit.html',
            controller: 'editperformanceindicatortypeController'
        })
        .state('app.datamanagement.permission', {
            url: '/permission',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.permission.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/permission/index.html',
            controller: 'permissionController'
        })
        .state('app.datamanagement.permission.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/permission/create.html',
            controller: 'createpermissionController'
        })
        .state('app.datamanagement.permission.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/permission/edit.html',
            controller: 'editpermissionController'
        })
        .state('app.datamanagement.person', {
            url: '/person',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.person.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/person/index.html',
            controller: 'personController'
        })
        .state('app.datamanagement.person.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/person/create.html',
            controller: 'createpersonController'
        })
        .state('app.datamanagement.person.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/person/edit.html',
            controller: 'editpersonController'
        })
        .state('app.datamanagement.personprefix', {
            url: '/personprefix',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.personprefix.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/personprefix/index.html',
            controller: 'personprefixController'
        })
        .state('app.datamanagement.personprefix.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/personprefix/create.html',
            controller: 'createpersonprefixController'
        })
        .state('app.datamanagement.personprefix.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/personprefix/edit.html',
            controller: 'editpersonprefixController'
        })
        .state('app.datamanagement.persontype', {
            url: '/persontype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.persontype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/persontype/index.html',
            controller: 'persontypeController'
        })
        .state('app.datamanagement.persontype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/persontype/create.html',
            controller: 'createpersontypeController'
        })
        .state('app.datamanagement.persontype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/persontype/edit.html',
            controller: 'editpersontypeController'
        })
        .state('app.datamanagement.post', {
            url: '/post',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.post.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/post/index.html',
            controller: 'postController'
        })
        .state('app.datamanagement.post.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/post/create.html',
            controller: 'createpostController'
        })
        .state('app.datamanagement.post.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/post/edit.html',
            controller: 'editpostController'
        })
        .state('app.datamanagement.posttype', {
            url: '/posttype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.posttype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/posttype/index.html',
            controller: 'posttypeController'
        })
        .state('app.datamanagement.posttype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/posttype/create.html',
            controller: 'createposttypeController'
        })
        .state('app.datamanagement.posttype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/posttype/edit.html',
            controller: 'editposttypeController'
        })
        .state('app.datamanagement.presentation', {
            url: '/presentation',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.presentation.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/presentation/index.html',
            controller: 'presentationController'
        })
        .state('app.datamanagement.presentation.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/presentation/create.html',
            controller: 'createpresentationController'
        })
        .state('app.datamanagement.presentation.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/presentation/edit.html',
            controller: 'editpresentationController'
        })
        .state('app.datamanagement.presentationstage', {
            url: '/presentationstage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.presentationstage.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/presentationstage/index.html',
            controller: 'presentationstageController'
        })
        .state('app.datamanagement.presentationstage.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/presentationstage/create.html',
            controller: 'createpresentationstageController'
        })
        .state('app.datamanagement.presentationstage.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/presentationstage/edit.html',
            controller: 'editpresentationstageController'
        })
        .state('app.datamanagement.price', {
            url: '/price',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.price.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/price/index.html',
            controller: 'priceController'
        })
        .state('app.datamanagement.price.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/price/create.html',
            controller: 'createpriceController'
        })
        .state('app.datamanagement.price.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/price/edit.html',
            controller: 'editpriceController'
        })
        .state('app.datamanagement.pricetype', {
            url: '/pricetype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.pricetype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/pricetype/index.html',
            controller: 'pricetypeController'
        })
        .state('app.datamanagement.pricetype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/pricetype/create.html',
            controller: 'createpricetypeController'
        })
        .state('app.datamanagement.pricetype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/pricetype/edit.html',
            controller: 'editpricetypeController'
        })
        .state('app.datamanagement.process', {
            url: '/process',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.process.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/process/index.html',
            controller: 'processController'
        })
        .state('app.datamanagement.process.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/process/create.html',
            controller: 'createprocessController'
        })
        .state('app.datamanagement.process.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/process/edit.html',
            controller: 'editprocessController'
        })
        .state('app.datamanagement.query', {
            url: '/query',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.query.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/query/index.html',
            controller: 'queryController'
        })
        .state('app.datamanagement.query.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/query/create.html',
            controller: 'createqueryController'
        })
        .state('app.datamanagement.query.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/query/edit.html',
            controller: 'editqueryController'
        })
        .state('app.datamanagement.quota', {
            url: '/quota',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.quota.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/quota/index.html',
            controller: 'quotaController'
        })
        .state('app.datamanagement.quota.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/quota/create.html',
            controller: 'createquotaController'
        })
        .state('app.datamanagement.quota.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/quota/edit.html',
            controller: 'editquotaController'
        })
        .state('app.datamanagement.relationship', {
            url: '/relationship',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.relationship.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/relationship/index.html',
            controller: 'relationshipController'
        })
        .state('app.datamanagement.relationship.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/relationship/create.html',
            controller: 'createrelationshipController'
        })
        .state('app.datamanagement.relationship.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/relationship/edit.html',
            controller: 'editrelationshipController'
        })
        .state('app.datamanagement.relationshiptype', {
            url: '/relationshiptype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.relationshiptype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/relationshiptype/index.html',
            controller: 'relationshiptypeController'
        })
        .state('app.datamanagement.relationshiptype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/relationshiptype/create.html',
            controller: 'createrelationshiptypeController'
        })
        .state('app.datamanagement.relationshiptype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/relationshiptype/edit.html',
            controller: 'editrelationshiptypeController'
        })
        .state('app.datamanagement.report', {
            url: '/report',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.report.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/report/index.html',
            controller: 'reportController'
        })
        .state('app.datamanagement.report.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/report/create.html',
            controller: 'createreportController'
        })
        .state('app.datamanagement.report.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/report/edit.html',
            controller: 'editreportController'
        })
        .state('app.datamanagement.reservation', {
            url: '/reservation',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.reservation.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/reservation/index.html',
            controller: 'reservationController'
        })
        .state('app.datamanagement.reservation.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/reservation/create.html',
            controller: 'createreservationController'
        })
        .state('app.datamanagement.reservation.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/reservation/edit.html',
            controller: 'editreservationController'
        })
        .state('app.datamanagement.reservationstatus', {
            url: '/reservationstatus',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.reservationstatus.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/reservationstatus/index.html',
            controller: 'reservationstatusController'
        })
        .state('app.datamanagement.reservationstatus.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/reservationstatus/create.html',
            controller: 'createreservationstatusController'
        })
        .state('app.datamanagement.reservationstatus.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/reservationstatus/edit.html',
            controller: 'editreservationstatusController'
        })
        .state('app.datamanagement.reservationtype', {
            url: '/reservationtype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.reservationtype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/reservationtype/index.html',
            controller: 'reservationtypeController'
        })
        .state('app.datamanagement.reservationtype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/reservationtype/create.html',
            controller: 'createreservationtypeController'
        })
        .state('app.datamanagement.reservationtype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/reservationtype/edit.html',
            controller: 'editreservationtypeController'
        })
        .state('app.datamanagement.rule', {
            url: '/rule',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.rule.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/rule/index.html',
            controller: 'ruleController'
        })
        .state('app.datamanagement.rule.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/rule/create.html',
            controller: 'createruleController'
        })
        .state('app.datamanagement.rule.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/rule/edit.html',
            controller: 'editruleController'
        })
        .state('app.datamanagement.sale', {
            url: '/sale',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.sale.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/sale/index.html',
            controller: 'saleController'
        })
        .state('app.datamanagement.sale.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/sale/create.html',
            controller: 'createsaleController'
        })
        .state('app.datamanagement.sale.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/sale/edit.html',
            controller: 'editsaleController'
        })
        .state('app.datamanagement.salesrequest', {
            url: '/salesrequest',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.salesrequest.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/salesrequest/index.html',
            controller: 'salesrequestController'
        })
        .state('app.datamanagement.salesrequest.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/salesrequest/create.html',
            controller: 'createsalesrequestController'
        })
        .state('app.datamanagement.salesrequest.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/salesrequest/edit.html',
            controller: 'editsalesrequestController'
        })
        .state('app.datamanagement.salesrequesttype', {
            url: '/salesrequesttype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.salesrequesttype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/salesrequesttype/index.html',
            controller: 'salesrequesttypeController'
        })
        .state('app.datamanagement.salesrequesttype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/salesrequesttype/create.html',
            controller: 'createsalesrequesttypeController'
        })
        .state('app.datamanagement.salesrequesttype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/salesrequesttype/edit.html',
            controller: 'editsalesrequesttypeController'
        })
        .state('app.datamanagement.salestatus', {
            url: '/salestatus',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.salestatus.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/salestatus/index.html',
            controller: 'salestatusController'
        })
        .state('app.datamanagement.salestatus.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/salestatus/create.html',
            controller: 'createsalestatusController'
        })
        .state('app.datamanagement.salestatus.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/salestatus/edit.html',
            controller: 'editsalestatusController'
        })
        .state('app.datamanagement.salestatustype', {
            url: '/salestatustype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.salestatustype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/salestatustype/index.html',
            controller: 'salestatustypeController'
        })
        .state('app.datamanagement.salestatustype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/salestatustype/create.html',
            controller: 'createsalestatustypeController'
        })
        .state('app.datamanagement.salestatustype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/salestatustype/edit.html',
            controller: 'editsalestatustypeController'
        })
        .state('app.datamanagement.subscription', {
            url: '/subscription',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.subscription.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/subscription/index.html',
            controller: 'subscriptionController'
        })
        .state('app.datamanagement.subscription.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/subscription/create.html',
            controller: 'createsubscriptionController'
        })
        .state('app.datamanagement.subscription.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/subscription/edit.html',
            controller: 'editsubscriptionController'
        })
        .state('app.datamanagement.task', {
            url: '/task',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.task.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/task/index.html',
            controller: 'taskController'
        })
        .state('app.datamanagement.task.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/task/create.html',
            controller: 'createtaskController'
        })
        .state('app.datamanagement.task.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/task/edit.html',
            controller: 'edittaskController'
        })
        .state('app.datamanagement.template', {
            url: '/template',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.template.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/template/index.html',
            controller: 'templateController'
        })
        .state('app.datamanagement.template.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/template/create.html',
            controller: 'createtemplateController'
        })
        .state('app.datamanagement.template.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/template/edit.html',
            controller: 'edittemplateController'
        })
        .state('app.datamanagement.translation', {
            url: '/translation',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.translation.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/translation/index.html',
            controller: 'translationController'
        })
        .state('app.datamanagement.translation.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/translation/create.html',
            controller: 'createtranslationController'
        })
        .state('app.datamanagement.translation.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/translation/edit.html',
            controller: 'edittranslationController'
        })
        .state('app.datamanagement.unit', {
            url: '/unit',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.unit.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/unit/index.html',
            controller: 'unitController'
        })
        .state('app.datamanagement.unit.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/unit/create.html',
            controller: 'createunitController'
        })
        .state('app.datamanagement.unit.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/unit/edit.html',
            controller: 'editunitController'
        })
        .state('app.datamanagement.unitquota', {
            url: '/unitquota',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.unitquota.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/unitquota/index.html',
            controller: 'unitquotaController'
        })
        .state('app.datamanagement.unitquota.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/unitquota/create.html',
            controller: 'createunitquotaController'
        })
        .state('app.datamanagement.unitquota.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/unitquota/edit.html',
            controller: 'editunitquotaController'
        })
        .state('app.datamanagement.unitstatus', {
            url: '/unitstatus',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.unitstatus.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/unitstatus/index.html',
            controller: 'unitstatusController'
        })
        .state('app.datamanagement.unitstatus.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/unitstatus/create.html',
            controller: 'createunitstatusController'
        })
        .state('app.datamanagement.unitstatus.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/unitstatus/edit.html',
            controller: 'editunitstatusController'
        })
        .state('app.datamanagement.unitsubtype', {
            url: '/unitsubtype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.unitsubtype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/unitsubtype/index.html',
            controller: 'unitsubtypeController'
        })
        .state('app.datamanagement.unitsubtype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/unitsubtype/create.html',
            controller: 'createunitsubtypeController'
        })
        .state('app.datamanagement.unitsubtype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/unitsubtype/edit.html',
            controller: 'editunitsubtypeController'
        })
        .state('app.datamanagement.unittype', {
            url: '/unittype',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.unittype.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/unittype/index.html',
            controller: 'unittypeController'
        })
        .state('app.datamanagement.unittype.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/unittype/create.html',
            controller: 'createunittypeController'
        })
        .state('app.datamanagement.unittype.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/unittype/edit.html',
            controller: 'editunittypeController'
        })
        .state('app.datamanagement.webpage', {
            url: '/webpage',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.datamanagement.webpage.list', {
            url: '/',
            templateUrl: 'directPortal/modules/datamanagement/webpage/index.html',
            controller: 'webpageController'
        })
        .state('app.datamanagement.webpage.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/datamanagement/webpage/create.html',
            controller: 'createwebpageController'
        })
        .state('app.datamanagement.webpage.edit', {
            url: '/edit/:id',
            templateUrl: 'directPortal/modules/datamanagement/webpage/edit.html',
            controller: 'editwebpageController'
        });

});
directPortalApp.controller('approvalController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('approval').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('approvalService', function ($http, __env) {
    var approvalService = {};

    approvalService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    approvalService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/' + id).then(successCallback, errorCallback);
    };

    approvalService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/Relationships/' + id).then(successCallback, errorCallback);
    };

    approvalService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    approvalService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    approvalService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/Translations/' + id).then(successCallback, errorCallback);
    };

    approvalService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/Notes/' + id).then(successCallback, errorCallback);
    };

    approvalService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/ByName/' + id).then(successCallback, errorCallback);
    };

    approvalService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/Activate/' + id).then(successCallback, errorCallback);
    };

    approvalService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Approval/Deactivate/' + id).then(successCallback, errorCallback);
    };

    approvalService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Approval/Active' + fields).then(successCallback, errorCallback);
    };

    approvalService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Approval/' + id + fields).then(successCallback, errorCallback);
    };

    approvalService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Approval/' + fields).then(successCallback, errorCallback);
    };

    approvalService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Approval/', model).then(successCallback, errorCallback);

    };

    approvalService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Approval', model).then(successCallback, errorCallback);
    };

    approvalService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Approval/ByName', model).then(successCallback, errorCallback);
    };

    return approvalService;
});
directPortalApp.controller('createapprovalController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editapprovalController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('buildingController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('building').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('buildingService', function ($http, __env) {
    var buildingService = {};

    buildingService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/' + id).then(successCallback, errorCallback);
    };

    buildingService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Building/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Building/Active' + fields).then(successCallback, errorCallback);
    };

    buildingService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Building/' + id + fields).then(successCallback, errorCallback);
    };

    buildingService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Building/' + fields).then(successCallback, errorCallback);
    };

    buildingService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Building/', model).then(successCallback, errorCallback);

    };

    buildingService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Building', model).then(successCallback, errorCallback);
    };

    buildingService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Building/ByName', model).then(successCallback, errorCallback);
    };

    return buildingService;
});
directPortalApp.controller('createbuildingController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editbuildingController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('buildingphaseController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('buildingphase').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('buildingphaseService', function ($http, __env) {
    var buildingphaseService = {};

    buildingphaseService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingphaseService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/Active' + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/' + id + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/' + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingPhase/', model).then(successCallback, errorCallback);

    };

    buildingphaseService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingPhase', model).then(successCallback, errorCallback);
    };

    buildingphaseService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingPhase/ByName', model).then(successCallback, errorCallback);
    };

    return buildingphaseService;
});
directPortalApp.controller('createbuildingphaseController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editbuildingphaseController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('buildingstatusController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('buildingstatus').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('buildingstatusService', function ($http, __env) {
    var buildingstatusService = {};

    buildingstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/Active' + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/' + id + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/' + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingStatus/', model).then(successCallback, errorCallback);

    };

    buildingstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatus', model).then(successCallback, errorCallback);
    };

    buildingstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatus/ByName', model).then(successCallback, errorCallback);
    };

    return buildingstatusService;
});
directPortalApp.controller('createbuildingstatusController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editbuildingstatusController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('buildingstatustypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('buildingstatustype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('buildingstatustypeService', function ($http, __env) {
    var buildingstatustypeService = {};

    buildingstatustypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingstatustypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/Active' + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + id + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingStatusType/', model).then(successCallback, errorCallback);

    };

    buildingstatustypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatusType', model).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatusType/ByName', model).then(successCallback, errorCallback);
    };

    return buildingstatustypeService;
});
directPortalApp.controller('createbuildingstatustypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editbuildingstatustypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('calendareventController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('calendarevent').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('calendareventService', function ($http, __env) {
    var calendareventService = {};

    calendareventService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    calendareventService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Relationships/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Translations/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Notes/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ByName/' + id).then(successCallback, errorCallback);
    };

    calendareventService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Activate/' + id).then(successCallback, errorCallback);
    };

    calendareventService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Deactivate/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/Active' + fields).then(successCallback, errorCallback);
    };

    calendareventService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/' + id + fields).then(successCallback, errorCallback);
    };

    calendareventService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/' + fields).then(successCallback, errorCallback);
    };

    calendareventService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/CalendarEvent/', model).then(successCallback, errorCallback);

    };

    calendareventService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/CalendarEvent', model).then(successCallback, errorCallback);
    };

    calendareventService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/CalendarEvent/ByName', model).then(successCallback, errorCallback);
    };

    return calendareventService;
});
directPortalApp.controller('createcalendareventController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcalendareventController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('complexController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('complex').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('complexService', function ($http, __env) {
    var complexService = {};

    complexService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    complexService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/' + id).then(successCallback, errorCallback);
    };

    complexService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/Relationships/' + id).then(successCallback, errorCallback);
    };

    complexService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    complexService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    complexService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/Translations/' + id).then(successCallback, errorCallback);
    };

    complexService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/Notes/' + id).then(successCallback, errorCallback);
    };

    complexService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/ByName/' + id).then(successCallback, errorCallback);
    };

    complexService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/Activate/' + id).then(successCallback, errorCallback);
    };

    complexService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Complex/Deactivate/' + id).then(successCallback, errorCallback);
    };

    complexService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Complex/Active' + fields).then(successCallback, errorCallback);
    };

    complexService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Complex/' + id + fields).then(successCallback, errorCallback);
    };

    complexService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Complex/' + fields).then(successCallback, errorCallback);
    };

    complexService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Complex/', model).then(successCallback, errorCallback);

    };

    complexService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Complex', model).then(successCallback, errorCallback);
    };

    complexService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Complex/ByName', model).then(successCallback, errorCallback);
    };

    return complexService;
});
directPortalApp.controller('createcomplexController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcomplexController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('configurationController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('configuration').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('configurationService', function ($http, __env) {
    var configurationService = {};

    configurationService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    configurationService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/' + id).then(successCallback, errorCallback);
    };

    configurationService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/Relationships/' + id).then(successCallback, errorCallback);
    };

    configurationService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    configurationService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    configurationService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/Translations/' + id).then(successCallback, errorCallback);
    };

    configurationService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/Notes/' + id).then(successCallback, errorCallback);
    };

    configurationService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/ByName/' + id).then(successCallback, errorCallback);
    };

    configurationService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/Activate/' + id).then(successCallback, errorCallback);
    };

    configurationService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Configuration/Deactivate/' + id).then(successCallback, errorCallback);
    };

    configurationService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Configuration/Active' + fields).then(successCallback, errorCallback);
    };

    configurationService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Configuration/' + id + fields).then(successCallback, errorCallback);
    };

    configurationService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Configuration/' + fields).then(successCallback, errorCallback);
    };

    configurationService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Configuration/', model).then(successCallback, errorCallback);

    };

    configurationService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Configuration', model).then(successCallback, errorCallback);
    };

    configurationService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Configuration/ByName', model).then(successCallback, errorCallback);
    };

    return configurationService;
});
directPortalApp.controller('createconfigurationController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editconfigurationController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contactaddressController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contactaddress').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contactaddressService', function ($http, __env) {
    var contactaddressService = {};

    contactaddressService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactaddressService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Translations/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Notes/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ByName/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Activate/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/Active' + fields).then(successCallback, errorCallback);
    };

    contactaddressService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/' + id + fields).then(successCallback, errorCallback);
    };

    contactaddressService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/' + fields).then(successCallback, errorCallback);
    };

    contactaddressService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactAddress/', model).then(successCallback, errorCallback);

    };

    contactaddressService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddress', model).then(successCallback, errorCallback);
    };

    contactaddressService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddress/ByName', model).then(successCallback, errorCallback);
    };

    return contactaddressService;
});
directPortalApp.controller('createcontactaddressController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontactaddressController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contactaddresstypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contactaddresstype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contactaddresstypeService', function ($http, __env) {
    var contactaddresstypeService = {};

    contactaddresstypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactaddresstypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Translations/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Notes/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ByName/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Activate/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/Active' + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/' + id + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/' + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactAddressType/', model).then(successCallback, errorCallback);

    };

    contactaddresstypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddressType', model).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddressType/ByName', model).then(successCallback, errorCallback);
    };

    return contactaddresstypeService;
});
directPortalApp.controller('createcontactaddresstypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontactaddresstypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contactdetailController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contactdetail').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contactdetailService', function ($http, __env) {
    var contactdetailService = {};

    contactdetailService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactdetailService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Translations/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Notes/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ByName/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Activate/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/Active' + fields).then(successCallback, errorCallback);
    };

    contactdetailService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/' + id + fields).then(successCallback, errorCallback);
    };

    contactdetailService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/' + fields).then(successCallback, errorCallback);
    };

    contactdetailService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactDetail/', model).then(successCallback, errorCallback);

    };

    contactdetailService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetail', model).then(successCallback, errorCallback);
    };

    contactdetailService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetail/ByName', model).then(successCallback, errorCallback);
    };

    return contactdetailService;
});
directPortalApp.controller('createcontactdetailController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontactdetailController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contactdetailtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contactdetailtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contactdetailtypeService', function ($http, __env) {
    var contactdetailtypeService = {};

    contactdetailtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactdetailtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Translations/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Notes/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ByName/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Activate/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/Active' + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/' + id + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/' + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactDetailType/', model).then(successCallback, errorCallback);

    };

    contactdetailtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetailType', model).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetailType/ByName', model).then(successCallback, errorCallback);
    };

    return contactdetailtypeService;
});
directPortalApp.controller('createcontactdetailtypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontactdetailtypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contractController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contract').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contractService', function ($http, __env) {
    var contractService = {};

    contractService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contractService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/' + id).then(successCallback, errorCallback);
    };

    contractService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/Relationships/' + id).then(successCallback, errorCallback);
    };

    contractService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contractService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contractService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/Translations/' + id).then(successCallback, errorCallback);
    };

    contractService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/Notes/' + id).then(successCallback, errorCallback);
    };

    contractService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/ByName/' + id).then(successCallback, errorCallback);
    };

    contractService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/Activate/' + id).then(successCallback, errorCallback);
    };

    contractService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Contract/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contractService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Contract/Active' + fields).then(successCallback, errorCallback);
    };

    contractService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Contract/' + id + fields).then(successCallback, errorCallback);
    };

    contractService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Contract/' + fields).then(successCallback, errorCallback);
    };

    contractService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Contract/', model).then(successCallback, errorCallback);

    };

    contractService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Contract', model).then(successCallback, errorCallback);
    };

    contractService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Contract/ByName', model).then(successCallback, errorCallback);
    };

    return contractService;
});
directPortalApp.controller('createcontractController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontractController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contractdetailController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contractdetail').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contractdetailService', function ($http, __env) {
    var contractdetailService = {};

    contractdetailService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contractdetailService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Relationships/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Translations/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Notes/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ByName/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Activate/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/Active' + fields).then(successCallback, errorCallback);
    };

    contractdetailService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/' + id + fields).then(successCallback, errorCallback);
    };

    contractdetailService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/' + fields).then(successCallback, errorCallback);
    };

    contractdetailService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContractDetail/', model).then(successCallback, errorCallback);

    };

    contractdetailService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetail', model).then(successCallback, errorCallback);
    };

    contractdetailService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetail/ByName', model).then(successCallback, errorCallback);
    };

    return contractdetailService;
});
directPortalApp.controller('createcontractdetailController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontractdetailController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('contractdetailtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('contractdetailtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('contractdetailtypeService', function ($http, __env) {
    var contractdetailtypeService = {};

    contractdetailtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contractdetailtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Translations/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Notes/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ByName/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Activate/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/Active' + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/' + id + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/' + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContractDetailType/', model).then(successCallback, errorCallback);

    };

    contractdetailtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetailType', model).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetailType/ByName', model).then(successCallback, errorCallback);
    };

    return contractdetailtypeService;
});
directPortalApp.controller('createcontractdetailtypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcontractdetailtypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('countryController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('country').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('countryService', function ($http, __env) {
    var countryService = {};

    countryService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    countryService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/' + id).then(successCallback, errorCallback);
    };

    countryService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/Relationships/' + id).then(successCallback, errorCallback);
    };

    countryService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    countryService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    countryService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/Translations/' + id).then(successCallback, errorCallback);
    };

    countryService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/Notes/' + id).then(successCallback, errorCallback);
    };

    countryService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/ByName/' + id).then(successCallback, errorCallback);
    };

    countryService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/Activate/' + id).then(successCallback, errorCallback);
    };

    countryService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Country/Deactivate/' + id).then(successCallback, errorCallback);
    };

    countryService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Country/Active' + fields).then(successCallback, errorCallback);
    };

    countryService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Country/' + id + fields).then(successCallback, errorCallback);
    };

    countryService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Country/' + fields).then(successCallback, errorCallback);
    };

    countryService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Country/', model).then(successCallback, errorCallback);

    };

    countryService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Country', model).then(successCallback, errorCallback);
    };

    countryService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Country/ByName', model).then(successCallback, errorCallback);
    };

    return countryService;
});
directPortalApp.controller('createcountryController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editcountryController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('createdeveloperController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('developerController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('developer').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('developerService', function ($http, __env) {
    var developerService = {};

    developerService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    developerService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/' + id).then(successCallback, errorCallback);
    };

    developerService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/Relationships/' + id).then(successCallback, errorCallback);
    };

    developerService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    developerService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    developerService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/Translations/' + id).then(successCallback, errorCallback);
    };

    developerService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/Notes/' + id).then(successCallback, errorCallback);
    };

    developerService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/ByName/' + id).then(successCallback, errorCallback);
    };

    developerService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/Activate/' + id).then(successCallback, errorCallback);
    };

    developerService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Developer/Deactivate/' + id).then(successCallback, errorCallback);
    };

    developerService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Developer/Active' + fields).then(successCallback, errorCallback);
    };

    developerService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Developer/' + id + fields).then(successCallback, errorCallback);
    };

    developerService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Developer/' + fields).then(successCallback, errorCallback);
    };

    developerService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Developer/', model).then(successCallback, errorCallback);

    };

    developerService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Developer', model).then(successCallback, errorCallback);
    };

    developerService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Developer/ByName', model).then(successCallback, errorCallback);
    };

    return developerService;
});
directPortalApp.controller('editdeveloperController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('createdocumentController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('documentController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('document').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('documentService', function ($http, __env) {
    var documentService = {};

    documentService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    documentService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/' + id).then(successCallback, errorCallback);
    };

    documentService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Relationships/' + id).then(successCallback, errorCallback);
    };

    documentService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    documentService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    documentService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Translations/' + id).then(successCallback, errorCallback);
    };

    documentService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Notes/' + id).then(successCallback, errorCallback);
    };

    documentService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ByName/' + id).then(successCallback, errorCallback);
    };

    documentService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Activate/' + id).then(successCallback, errorCallback);
    };

    documentService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Deactivate/' + id).then(successCallback, errorCallback);
    };

    documentService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/Active' + fields).then(successCallback, errorCallback);
    };

    documentService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/' + id + fields).then(successCallback, errorCallback);
    };

    documentService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/' + fields).then(successCallback, errorCallback);
    };

    documentService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Document/', model).then(successCallback, errorCallback);

    };

    documentService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Document', model).then(successCallback, errorCallback);
    };

    documentService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Document/ByName', model).then(successCallback, errorCallback);
    };

    return documentService;
});
directPortalApp.controller('editdocumentController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('createdocumenttypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('documenttypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('documenttype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('documenttypeService', function ($http, __env) {
    var documenttypeService = {};

    documenttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    documenttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Relationships/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Translations/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Notes/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ByName/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Activate/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/Active' + fields).then(successCallback, errorCallback);
    };

    documenttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/' + id + fields).then(successCallback, errorCallback);
    };

    documenttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/' + fields).then(successCallback, errorCallback);
    };

    documenttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/DocumentType/', model).then(successCallback, errorCallback);

    };

    documenttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/DocumentType', model).then(successCallback, errorCallback);
    };

    documenttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/DocumentType/ByName', model).then(successCallback, errorCallback);
    };

    return documenttypeService;
});
directPortalApp.controller('editdocumenttypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('createentityController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editentityController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('entityController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('entity').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('entityService', function ($http, __env) {
    var entityService = {};

    entityService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entityService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/' + id).then(successCallback, errorCallback);
    };

    entityService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Relationships/' + id).then(successCallback, errorCallback);
    };

    entityService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entityService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entityService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Translations/' + id).then(successCallback, errorCallback);
    };

    entityService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Notes/' + id).then(successCallback, errorCallback);
    };

    entityService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ByName/' + id).then(successCallback, errorCallback);
    };

    entityService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Activate/' + id).then(successCallback, errorCallback);
    };

    entityService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entityService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/Active' + fields).then(successCallback, errorCallback);
    };

    entityService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/' + id + fields).then(successCallback, errorCallback);
    };

    entityService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/' + fields).then(successCallback, errorCallback);
    };

    entityService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Entity/', model).then(successCallback, errorCallback);

    };

    entityService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Entity', model).then(successCallback, errorCallback);
    };

    entityService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Entity/ByName', model).then(successCallback, errorCallback);
    };

    return entityService;
});
directPortalApp.controller('createentitypropertyController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editentitypropertyController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('entitypropertyController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('entityproperty').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('entitypropertyService', function ($http, __env) {
    var entitypropertyService = {};

    entitypropertyService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entitypropertyService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Relationships/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Translations/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Notes/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ByName/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Activate/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/Active' + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/' + id + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/' + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/EntityProperty/', model).then(successCallback, errorCallback);

    };

    entitypropertyService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityProperty', model).then(successCallback, errorCallback);
    };

    entitypropertyService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityProperty/ByName', model).then(successCallback, errorCallback);
    };

    return entitypropertyService;
});
directPortalApp.controller('createentitytypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editentitytypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('entitytypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('entitytype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('entitytypeService', function ($http, __env) {
    var entitytypeService = {};

    entitytypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entitytypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Relationships/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Translations/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Notes/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ByName/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Activate/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/Active' + fields).then(successCallback, errorCallback);
    };

    entitytypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/' + id + fields).then(successCallback, errorCallback);
    };

    entitytypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/' + fields).then(successCallback, errorCallback);
    };

    entitytypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/EntityType/', model).then(successCallback, errorCallback);

    };

    entitytypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityType', model).then(successCallback, errorCallback);
    };

    entitytypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityType/ByName', model).then(successCallback, errorCallback);
    };

    return entitytypeService;
});
directPortalApp.controller('createfeatureController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editfeatureController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('featureController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('feature').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('featureService', function ($http, __env) {
    var featureService = {};

    featureService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    featureService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/' + id).then(successCallback, errorCallback);
    };

    featureService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/Relationships/' + id).then(successCallback, errorCallback);
    };

    featureService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    featureService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    featureService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/Translations/' + id).then(successCallback, errorCallback);
    };

    featureService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/Notes/' + id).then(successCallback, errorCallback);
    };

    featureService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/ByName/' + id).then(successCallback, errorCallback);
    };

    featureService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/Activate/' + id).then(successCallback, errorCallback);
    };

    featureService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Feature/Deactivate/' + id).then(successCallback, errorCallback);
    };

    featureService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Feature/Active' + fields).then(successCallback, errorCallback);
    };

    featureService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Feature/' + id + fields).then(successCallback, errorCallback);
    };

    featureService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Feature/' + fields).then(successCallback, errorCallback);
    };

    featureService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Feature/', model).then(successCallback, errorCallback);

    };

    featureService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Feature', model).then(successCallback, errorCallback);
    };

    featureService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Feature/ByName', model).then(successCallback, errorCallback);
    };

    return featureService;
});
directPortalApp.controller('createfeaturetypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editfeaturetypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('featuretypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('featuretype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('featuretypeService', function ($http, __env) {
    var featuretypeService = {};

    featuretypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    featuretypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/Relationships/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/Translations/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/Notes/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/ByName/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/Activate/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FeatureType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    featuretypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FeatureType/Active' + fields).then(successCallback, errorCallback);
    };

    featuretypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FeatureType/' + id + fields).then(successCallback, errorCallback);
    };

    featuretypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FeatureType/' + fields).then(successCallback, errorCallback);
    };

    featuretypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/FeatureType/', model).then(successCallback, errorCallback);

    };

    featuretypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FeatureType', model).then(successCallback, errorCallback);
    };

    featuretypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FeatureType/ByName', model).then(successCallback, errorCallback);
    };

    return featuretypeService;
});
directPortalApp.controller('createfloorplanController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editfloorplanController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('floorplanController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('floorplan').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('floorplanService', function ($http, __env) {
    var floorplanService = {};

    floorplanService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    floorplanService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Relationships/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Translations/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Notes/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ByName/' + id).then(successCallback, errorCallback);
    };

    floorplanService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Activate/' + id).then(successCallback, errorCallback);
    };

    floorplanService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Deactivate/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/Active' + fields).then(successCallback, errorCallback);
    };

    floorplanService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/' + id + fields).then(successCallback, errorCallback);
    };

    floorplanService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/' + fields).then(successCallback, errorCallback);
    };

    floorplanService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/FloorPlan/', model).then(successCallback, errorCallback);

    };

    floorplanService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FloorPlan', model).then(successCallback, errorCallback);
    };

    floorplanService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FloorPlan/ByName', model).then(successCallback, errorCallback);
    };

    return floorplanService;
});
directPortalApp.controller('createlanguageController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editlanguageController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('languageController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('language').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('languageService', function ($http, __env) {
    var languageService = {};

    languageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    languageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/' + id).then(successCallback, errorCallback);
    };

    languageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Relationships/' + id).then(successCallback, errorCallback);
    };

    languageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    languageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    languageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Translations/' + id).then(successCallback, errorCallback);
    };

    languageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Notes/' + id).then(successCallback, errorCallback);
    };

    languageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ByName/' + id).then(successCallback, errorCallback);
    };

    languageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Activate/' + id).then(successCallback, errorCallback);
    };

    languageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Deactivate/' + id).then(successCallback, errorCallback);
    };

    languageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/Active' + fields).then(successCallback, errorCallback);
    };

    languageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/' + id + fields).then(successCallback, errorCallback);
    };

    languageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/' + fields).then(successCallback, errorCallback);
    };

    languageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Language/', model).then(successCallback, errorCallback);

    };

    languageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Language', model).then(successCallback, errorCallback);
    };

    languageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Language/ByName', model).then(successCallback, errorCallback);
    };

    return languageService;
});
directPortalApp.controller('createmarketingmaterialController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editmarketingmaterialController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('marketingmaterialController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('marketingmaterial').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('marketingmaterialService', function ($http, __env) {
    var marketingmaterialService = {};

    marketingmaterialService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    marketingmaterialService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Relationships/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Translations/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Notes/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ByName/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Activate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Deactivate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/Active' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + id + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/MarketingMaterial/', model).then(successCallback, errorCallback);

    };

    marketingmaterialService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterial', model).then(successCallback, errorCallback);
    };

    marketingmaterialService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterial/ByName', model).then(successCallback, errorCallback);
    };

    return marketingmaterialService;
});
directPortalApp.controller('createmarketingmaterialtypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editmarketingmaterialtypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('marketingmaterialtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('marketingmaterialtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('marketingmaterialtypeService', function ($http, __env) {
    var marketingmaterialtypeService = {};

    marketingmaterialtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    marketingmaterialtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Relationships/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Translations/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Notes/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ByName/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Activate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Active' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + id + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/MarketingMaterialType/', model).then(successCallback, errorCallback);

    };

    marketingmaterialtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterialType', model).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterialType/ByName', model).then(successCallback, errorCallback);
    };

    return marketingmaterialtypeService;
});
directPortalApp.controller('createmessageController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editmessageController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('messageController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('message').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('messageService', function ($http, __env) {
    var messageService = {};

    messageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    messageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/' + id).then(successCallback, errorCallback);
    };

    messageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/Relationships/' + id).then(successCallback, errorCallback);
    };

    messageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    messageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    messageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/Translations/' + id).then(successCallback, errorCallback);
    };

    messageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/Notes/' + id).then(successCallback, errorCallback);
    };

    messageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/ByName/' + id).then(successCallback, errorCallback);
    };

    messageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/Activate/' + id).then(successCallback, errorCallback);
    };

    messageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Message/Deactivate/' + id).then(successCallback, errorCallback);
    };

    messageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Message/Active' + fields).then(successCallback, errorCallback);
    };

    messageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Message/' + id + fields).then(successCallback, errorCallback);
    };

    messageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Message/' + fields).then(successCallback, errorCallback);
    };

    messageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Message/', model).then(successCallback, errorCallback);

    };

    messageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Message', model).then(successCallback, errorCallback);
    };

    messageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Message/ByName', model).then(successCallback, errorCallback);
    };

    return messageService;
});
directPortalApp.controller('createnationalityController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editnationalityController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('nationalityController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('nationality').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('nationalityService', function ($http, __env) {
    var nationalityService = {};

    nationalityService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    nationalityService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Relationships/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Translations/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Notes/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ByName/' + id).then(successCallback, errorCallback);
    };

    nationalityService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Activate/' + id).then(successCallback, errorCallback);
    };

    nationalityService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Deactivate/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/Active' + fields).then(successCallback, errorCallback);
    };

    nationalityService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/' + id + fields).then(successCallback, errorCallback);
    };

    nationalityService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/' + fields).then(successCallback, errorCallback);
    };

    nationalityService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Nationality/', model).then(successCallback, errorCallback);

    };

    nationalityService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Nationality', model).then(successCallback, errorCallback);
    };

    nationalityService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Nationality/ByName', model).then(successCallback, errorCallback);
    };

    return nationalityService;
});
directPortalApp.controller('createnoteController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editnoteController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('noteController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('note').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('noteService', function ($http, __env) {
    var noteService = {};

    noteService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    noteService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/' + id).then(successCallback, errorCallback);
    };

    noteService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/Relationships/' + id).then(successCallback, errorCallback);
    };

    noteService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    noteService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    noteService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/Translations/' + id).then(successCallback, errorCallback);
    };

    noteService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/Notes/' + id).then(successCallback, errorCallback);
    };

    noteService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/ByName/' + id).then(successCallback, errorCallback);
    };

    noteService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/Activate/' + id).then(successCallback, errorCallback);
    };

    noteService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Note/Deactivate/' + id).then(successCallback, errorCallback);
    };

    noteService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Note/Active' + fields).then(successCallback, errorCallback);
    };

    noteService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Note/' + id + fields).then(successCallback, errorCallback);
    };

    noteService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Note/' + fields).then(successCallback, errorCallback);
    };

    noteService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Note/', model).then(successCallback, errorCallback);

    };

    noteService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Note', model).then(successCallback, errorCallback);
    };

    noteService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Note/ByName', model).then(successCallback, errorCallback);
    };

    return noteService;
});
directPortalApp.controller('createnotificationController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editnotificationController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('notificationController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('notification').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('notificationService', function ($http, __env) {
    var notificationService = {};

    notificationService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    notificationService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/' + id).then(successCallback, errorCallback);
    };

    notificationService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/Relationships/' + id).then(successCallback, errorCallback);
    };

    notificationService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    notificationService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    notificationService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/Translations/' + id).then(successCallback, errorCallback);
    };

    notificationService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/Notes/' + id).then(successCallback, errorCallback);
    };

    notificationService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/ByName/' + id).then(successCallback, errorCallback);
    };

    notificationService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/Activate/' + id).then(successCallback, errorCallback);
    };

    notificationService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Notification/Deactivate/' + id).then(successCallback, errorCallback);
    };

    notificationService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Notification/Active' + fields).then(successCallback, errorCallback);
    };

    notificationService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Notification/' + id + fields).then(successCallback, errorCallback);
    };

    notificationService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Notification/' + fields).then(successCallback, errorCallback);
    };

    notificationService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Notification/', model).then(successCallback, errorCallback);

    };

    notificationService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Notification', model).then(successCallback, errorCallback);
    };

    notificationService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Notification/ByName', model).then(successCallback, errorCallback);
    };

    return notificationService;
});
directPortalApp.controller('createorganizationunitController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editorganizationunitController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('organizationunitController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('organizationunit').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('organizationunitService', function ($http, __env) {
    var organizationunitService = {};

    organizationunitService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunitService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunitService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunitService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + fields).then(successCallback, errorCallback);
    };

    organizationunitService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnit/', model).then(successCallback, errorCallback);

    };

    organizationunitService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnit', model).then(successCallback, errorCallback);
    };

    organizationunitService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnit/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunitService;
});
directPortalApp.controller('createorganizationunitstatusController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editorganizationunitstatusController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('organizationunitstatusController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('organizationunitstatus').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('organizationunitstatusService', function ($http, __env) {
    var organizationunitstatusService = {};

    organizationunitstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunitstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnitStatus/', model).then(successCallback, errorCallback);

    };

    organizationunitstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitStatus', model).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitStatus/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunitstatusService;
});
directPortalApp.controller('createorganizationunittypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editorganizationunittypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('organizationunittypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('organizationunittype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('organizationunittypeService', function ($http, __env) {
    var organizationunittypeService = {};

    organizationunittypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunittypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnitType/', model).then(successCallback, errorCallback);

    };

    organizationunittypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitType', model).then(successCallback, errorCallback);
    };

    organizationunittypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitType/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunittypeService;
});
directPortalApp.controller('createownershiptypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editownershiptypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('ownershiptypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('ownershiptype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('ownershiptypeService', function ($http, __env) {
    var ownershiptypeService = {};

    ownershiptypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    ownershiptypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Relationships/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Translations/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Notes/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ByName/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Activate/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/Active' + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/' + id + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/' + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OwnershipType/', model).then(successCallback, errorCallback);

    };

    ownershiptypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OwnershipType', model).then(successCallback, errorCallback);
    };

    ownershiptypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OwnershipType/ByName', model).then(successCallback, errorCallback);
    };

    return ownershiptypeService;
});
directPortalApp.controller('createpaymentController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpaymentController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('paymentController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('payment').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('paymentService', function ($http, __env) {
    var paymentService = {};

    paymentService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymentService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/' + id).then(successCallback, errorCallback);
    };

    paymentService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymentService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymentService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymentService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/Translations/' + id).then(successCallback, errorCallback);
    };

    paymentService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/Notes/' + id).then(successCallback, errorCallback);
    };

    paymentService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/ByName/' + id).then(successCallback, errorCallback);
    };

    paymentService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/Activate/' + id).then(successCallback, errorCallback);
    };

    paymentService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Payment/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymentService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Payment/Active' + fields).then(successCallback, errorCallback);
    };

    paymentService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Payment/' + id + fields).then(successCallback, errorCallback);
    };

    paymentService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Payment/' + fields).then(successCallback, errorCallback);
    };

    paymentService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Payment/', model).then(successCallback, errorCallback);

    };

    paymentService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Payment', model).then(successCallback, errorCallback);
    };

    paymentService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Payment/ByName', model).then(successCallback, errorCallback);
    };

    return paymentService;
});
directPortalApp.controller('createpaymentmethodController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpaymentmethodController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('paymentmethodController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('paymentmethod').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('paymentmethodService', function ($http, __env) {
    var paymentmethodService = {};

    paymentmethodService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymentmethodService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Translations/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Notes/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ByName/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Activate/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/Active' + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/' + id + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/' + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PaymentMethod/', model).then(successCallback, errorCallback);

    };

    paymentmethodService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentMethod', model).then(successCallback, errorCallback);
    };

    paymentmethodService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentMethod/ByName', model).then(successCallback, errorCallback);
    };

    return paymentmethodService;
});
directPortalApp.controller('createpaymentpartController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpaymentpartController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('paymentpartController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('paymentpart').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('paymentpartService', function ($http, __env) {
    var paymentpartService = {};

    paymentpartService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymentpartService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Translations/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Notes/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ByName/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Activate/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/Active' + fields).then(successCallback, errorCallback);
    };

    paymentpartService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/' + id + fields).then(successCallback, errorCallback);
    };

    paymentpartService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/' + fields).then(successCallback, errorCallback);
    };

    paymentpartService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PaymentPart/', model).then(successCallback, errorCallback);

    };

    paymentpartService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentPart', model).then(successCallback, errorCallback);
    };

    paymentpartService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentPart/ByName', model).then(successCallback, errorCallback);
    };

    return paymentpartService;
});
directPortalApp.controller('createpaymenttypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpaymenttypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('paymenttypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('paymenttype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('paymenttypeService', function ($http, __env) {
    var paymenttypeService = {};

    paymenttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymenttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/Translations/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/Notes/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/ByName/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/Activate/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymenttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentType/Active' + fields).then(successCallback, errorCallback);
    };

    paymenttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentType/' + id + fields).then(successCallback, errorCallback);
    };

    paymenttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentType/' + fields).then(successCallback, errorCallback);
    };

    paymenttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PaymentType/', model).then(successCallback, errorCallback);

    };

    paymenttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentType', model).then(successCallback, errorCallback);
    };

    paymenttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentType/ByName', model).then(successCallback, errorCallback);
    };

    return paymenttypeService;
});
directPortalApp.controller('createperformanceindicatorController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editperformanceindicatorController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('performanceindicatorController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('performanceindicator').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('performanceindicatorService', function ($http, __env) {
    var performanceindicatorService = {};

    performanceindicatorService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    performanceindicatorService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Relationships/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Translations/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Notes/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/ByName/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Activate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Deactivate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatorService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/Active' + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + id + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicator/' + fields).then(successCallback, errorCallback);
    };

    performanceindicatorService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PerformanceIndicator/', model).then(successCallback, errorCallback);

    };

    performanceindicatorService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicator', model).then(successCallback, errorCallback);
    };

    performanceindicatorService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicator/ByName', model).then(successCallback, errorCallback);
    };

    return performanceindicatorService;
});
directPortalApp.controller('createperformanceindicatortypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editperformanceindicatortypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('performanceindicatortypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('performanceindicatortype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('performanceindicatortypeService', function ($http, __env) {
    var performanceindicatortypeService = {};

    performanceindicatortypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    performanceindicatortypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Relationships/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Translations/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Notes/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/ByName/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Activate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/Active' + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + id + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PerformanceIndicatorType/' + fields).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PerformanceIndicatorType/', model).then(successCallback, errorCallback);

    };

    performanceindicatortypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicatorType', model).then(successCallback, errorCallback);
    };

    performanceindicatortypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PerformanceIndicatorType/ByName', model).then(successCallback, errorCallback);
    };

    return performanceindicatortypeService;
});
directPortalApp.controller('createpermissionController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpermissionController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('permissionController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('permission').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('permissionService', function ($http, __env) {
    var permissionService = {};

    permissionService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    permissionService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/' + id).then(successCallback, errorCallback);
    };

    permissionService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/Relationships/' + id).then(successCallback, errorCallback);
    };

    permissionService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    permissionService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    permissionService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/Translations/' + id).then(successCallback, errorCallback);
    };

    permissionService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/Notes/' + id).then(successCallback, errorCallback);
    };

    permissionService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/ByName/' + id).then(successCallback, errorCallback);
    };

    permissionService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/Activate/' + id).then(successCallback, errorCallback);
    };

    permissionService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Permission/Deactivate/' + id).then(successCallback, errorCallback);
    };

    permissionService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Permission/Active' + fields).then(successCallback, errorCallback);
    };

    permissionService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Permission/' + id + fields).then(successCallback, errorCallback);
    };

    permissionService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Permission/' + fields).then(successCallback, errorCallback);
    };

    permissionService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Permission/', model).then(successCallback, errorCallback);

    };

    permissionService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Permission', model).then(successCallback, errorCallback);
    };

    permissionService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Permission/ByName', model).then(successCallback, errorCallback);
    };

    return permissionService;
});
directPortalApp.controller('createpersonController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpersonController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('personController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('person').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('personService', function ($http, __env) {
    var personService = {};

    personService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    personService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/' + id).then(successCallback, errorCallback);
    };

    personService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/Relationships/' + id).then(successCallback, errorCallback);
    };

    personService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    personService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    personService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/Translations/' + id).then(successCallback, errorCallback);
    };

    personService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/Notes/' + id).then(successCallback, errorCallback);
    };

    personService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/ByName/' + id).then(successCallback, errorCallback);
    };

    personService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/Activate/' + id).then(successCallback, errorCallback);
    };

    personService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Person/Deactivate/' + id).then(successCallback, errorCallback);
    };

    personService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Person/Active' + fields).then(successCallback, errorCallback);
    };

    personService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Person/' + id + fields).then(successCallback, errorCallback);
    };

    personService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Person/' + fields).then(successCallback, errorCallback);
    };

    personService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Person/', model).then(successCallback, errorCallback);

    };

    personService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Person', model).then(successCallback, errorCallback);
    };

    personService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Person/ByName', model).then(successCallback, errorCallback);
    };

    return personService;
});
directPortalApp.controller('createpersonprefixController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpersonprefixController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('personprefixController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('personprefix').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('personprefixService', function ($http, __env) {
    var personprefixService = {};

    personprefixService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    personprefixService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Relationships/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Translations/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Notes/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ByName/' + id).then(successCallback, errorCallback);
    };

    personprefixService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Activate/' + id).then(successCallback, errorCallback);
    };

    personprefixService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Deactivate/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/Active' + fields).then(successCallback, errorCallback);
    };

    personprefixService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/' + id + fields).then(successCallback, errorCallback);
    };

    personprefixService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/' + fields).then(successCallback, errorCallback);
    };

    personprefixService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PersonPrefix/', model).then(successCallback, errorCallback);

    };

    personprefixService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonPrefix', model).then(successCallback, errorCallback);
    };

    personprefixService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonPrefix/ByName', model).then(successCallback, errorCallback);
    };

    return personprefixService;
});
directPortalApp.controller('createpersontypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpersontypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('persontypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('persontype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('persontypeService', function ($http, __env) {
    var persontypeService = {};

    persontypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    persontypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/Relationships/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/Translations/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/Notes/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/ByName/' + id).then(successCallback, errorCallback);
    };

    persontypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/Activate/' + id).then(successCallback, errorCallback);
    };

    persontypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    persontypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonType/Active' + fields).then(successCallback, errorCallback);
    };

    persontypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonType/' + id + fields).then(successCallback, errorCallback);
    };

    persontypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonType/' + fields).then(successCallback, errorCallback);
    };

    persontypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PersonType/', model).then(successCallback, errorCallback);

    };

    persontypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonType', model).then(successCallback, errorCallback);
    };

    persontypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonType/ByName', model).then(successCallback, errorCallback);
    };

    return persontypeService;
});
directPortalApp.controller('createpostController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpostController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('postController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('post').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('postService', function ($http, __env) {
    var postService = {};

    postService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    postService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/' + id).then(successCallback, errorCallback);
    };

    postService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/Relationships/' + id).then(successCallback, errorCallback);
    };

    postService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    postService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    postService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/Translations/' + id).then(successCallback, errorCallback);
    };

    postService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/Notes/' + id).then(successCallback, errorCallback);
    };

    postService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/ByName/' + id).then(successCallback, errorCallback);
    };

    postService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/Activate/' + id).then(successCallback, errorCallback);
    };

    postService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Post/Deactivate/' + id).then(successCallback, errorCallback);
    };

    postService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Post/Active' + fields).then(successCallback, errorCallback);
    };

    postService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Post/' + id + fields).then(successCallback, errorCallback);
    };

    postService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Post/' + fields).then(successCallback, errorCallback);
    };

    postService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Post/', model).then(successCallback, errorCallback);

    };

    postService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Post', model).then(successCallback, errorCallback);
    };

    postService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Post/ByName', model).then(successCallback, errorCallback);
    };

    return postService;
});
directPortalApp.controller('createposttypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editposttypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('posttypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('posttype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('posttypeService', function ($http, __env) {
    var posttypeService = {};

    posttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    posttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/Relationships/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/Translations/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/Notes/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/ByName/' + id).then(successCallback, errorCallback);
    };

    posttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/Activate/' + id).then(successCallback, errorCallback);
    };

    posttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PostType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    posttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PostType/Active' + fields).then(successCallback, errorCallback);
    };

    posttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PostType/' + id + fields).then(successCallback, errorCallback);
    };

    posttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PostType/' + fields).then(successCallback, errorCallback);
    };

    posttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PostType/', model).then(successCallback, errorCallback);

    };

    posttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PostType', model).then(successCallback, errorCallback);
    };

    posttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PostType/ByName', model).then(successCallback, errorCallback);
    };

    return posttypeService;
});
directPortalApp.controller('createpresentationController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpresentationController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('presentationController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('presentation').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('presentationService', function ($http, __env) {
    var presentationService = {};

    presentationService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    presentationService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/' + id).then(successCallback, errorCallback);
    };

    presentationService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/Relationships/' + id).then(successCallback, errorCallback);
    };

    presentationService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    presentationService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    presentationService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/Translations/' + id).then(successCallback, errorCallback);
    };

    presentationService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/Notes/' + id).then(successCallback, errorCallback);
    };

    presentationService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/ByName/' + id).then(successCallback, errorCallback);
    };

    presentationService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/Activate/' + id).then(successCallback, errorCallback);
    };

    presentationService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Presentation/Deactivate/' + id).then(successCallback, errorCallback);
    };

    presentationService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Presentation/Active' + fields).then(successCallback, errorCallback);
    };

    presentationService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Presentation/' + id + fields).then(successCallback, errorCallback);
    };

    presentationService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Presentation/' + fields).then(successCallback, errorCallback);
    };

    presentationService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Presentation/', model).then(successCallback, errorCallback);

    };

    presentationService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Presentation', model).then(successCallback, errorCallback);
    };

    presentationService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Presentation/ByName', model).then(successCallback, errorCallback);
    };

    return presentationService;
});
directPortalApp.controller('createpresentationstageController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpresentationstageController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('presentationstageController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('presentationstage').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('presentationstageService', function ($http, __env) {
    var presentationstageService = {};

    presentationstageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    presentationstageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Relationships/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Translations/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Notes/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ByName/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Activate/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Deactivate/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/Active' + fields).then(successCallback, errorCallback);
    };

    presentationstageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/' + id + fields).then(successCallback, errorCallback);
    };

    presentationstageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/' + fields).then(successCallback, errorCallback);
    };

    presentationstageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PresentationStage/', model).then(successCallback, errorCallback);

    };

    presentationstageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PresentationStage', model).then(successCallback, errorCallback);
    };

    presentationstageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PresentationStage/ByName', model).then(successCallback, errorCallback);
    };

    return presentationstageService;
});
directPortalApp.controller('createpriceController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpriceController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('priceController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('price').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('priceService', function ($http, __env) {
    var priceService = {};

    priceService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    priceService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/' + id).then(successCallback, errorCallback);
    };

    priceService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/Relationships/' + id).then(successCallback, errorCallback);
    };

    priceService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    priceService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    priceService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/Translations/' + id).then(successCallback, errorCallback);
    };

    priceService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/Notes/' + id).then(successCallback, errorCallback);
    };

    priceService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/ByName/' + id).then(successCallback, errorCallback);
    };

    priceService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/Activate/' + id).then(successCallback, errorCallback);
    };

    priceService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Price/Deactivate/' + id).then(successCallback, errorCallback);
    };

    priceService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Price/Active' + fields).then(successCallback, errorCallback);
    };

    priceService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Price/' + id + fields).then(successCallback, errorCallback);
    };

    priceService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Price/' + fields).then(successCallback, errorCallback);
    };

    priceService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Price/', model).then(successCallback, errorCallback);

    };

    priceService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Price', model).then(successCallback, errorCallback);
    };

    priceService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Price/ByName', model).then(successCallback, errorCallback);
    };

    return priceService;
});
directPortalApp.controller('createpricetypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editpricetypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('pricetypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('pricetype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('pricetypeService', function ($http, __env) {
    var pricetypeService = {};

    pricetypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    pricetypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/Relationships/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/Translations/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/Notes/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/ByName/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/Activate/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PriceType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    pricetypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PriceType/Active' + fields).then(successCallback, errorCallback);
    };

    pricetypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PriceType/' + id + fields).then(successCallback, errorCallback);
    };

    pricetypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PriceType/' + fields).then(successCallback, errorCallback);
    };

    pricetypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PriceType/', model).then(successCallback, errorCallback);

    };

    pricetypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PriceType', model).then(successCallback, errorCallback);
    };

    pricetypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PriceType/ByName', model).then(successCallback, errorCallback);
    };

    return pricetypeService;
});
directPortalApp.controller('createprocessController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editprocessController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('processController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('process').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('processService', function ($http, __env) {
    var processService = {};

    processService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    processService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/' + id).then(successCallback, errorCallback);
    };

    processService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/Relationships/' + id).then(successCallback, errorCallback);
    };

    processService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    processService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    processService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/Translations/' + id).then(successCallback, errorCallback);
    };

    processService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/Notes/' + id).then(successCallback, errorCallback);
    };

    processService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/ByName/' + id).then(successCallback, errorCallback);
    };

    processService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/Activate/' + id).then(successCallback, errorCallback);
    };

    processService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Process/Deactivate/' + id).then(successCallback, errorCallback);
    };

    processService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Process/Active' + fields).then(successCallback, errorCallback);
    };

    processService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Process/' + id + fields).then(successCallback, errorCallback);
    };

    processService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Process/' + fields).then(successCallback, errorCallback);
    };

    processService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Process/', model).then(successCallback, errorCallback);

    };

    processService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Process', model).then(successCallback, errorCallback);
    };

    processService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Process/ByName', model).then(successCallback, errorCallback);
    };

    return processService;
});
directPortalApp.controller('createqueryController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editqueryController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('queryController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('query').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('queryService', function ($http, __env) {
    var queryService = {};

    queryService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    queryService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/' + id).then(successCallback, errorCallback);
    };

    queryService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/Relationships/' + id).then(successCallback, errorCallback);
    };

    queryService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    queryService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    queryService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/Translations/' + id).then(successCallback, errorCallback);
    };

    queryService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/Notes/' + id).then(successCallback, errorCallback);
    };

    queryService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/ByName/' + id).then(successCallback, errorCallback);
    };

    queryService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/Activate/' + id).then(successCallback, errorCallback);
    };

    queryService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Query/Deactivate/' + id).then(successCallback, errorCallback);
    };

    queryService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Query/Active' + fields).then(successCallback, errorCallback);
    };

    queryService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Query/' + id + fields).then(successCallback, errorCallback);
    };

    queryService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Query/' + fields).then(successCallback, errorCallback);
    };

    queryService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Query/', model).then(successCallback, errorCallback);

    };

    queryService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Query', model).then(successCallback, errorCallback);
    };

    queryService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Query/ByName', model).then(successCallback, errorCallback);
    };

    return queryService;
});
directPortalApp.controller('createquotaController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editquotaController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('quotaController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('quota').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('quotaService', function ($http, __env) {
    var quotaService = {};

    quotaService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    quotaService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/' + id).then(successCallback, errorCallback);
    };

    quotaService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/Relationships/' + id).then(successCallback, errorCallback);
    };

    quotaService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    quotaService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    quotaService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/Translations/' + id).then(successCallback, errorCallback);
    };

    quotaService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/Notes/' + id).then(successCallback, errorCallback);
    };

    quotaService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/ByName/' + id).then(successCallback, errorCallback);
    };

    quotaService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/Activate/' + id).then(successCallback, errorCallback);
    };

    quotaService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Quota/Deactivate/' + id).then(successCallback, errorCallback);
    };

    quotaService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Quota/Active' + fields).then(successCallback, errorCallback);
    };

    quotaService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Quota/' + id + fields).then(successCallback, errorCallback);
    };

    quotaService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Quota/' + fields).then(successCallback, errorCallback);
    };

    quotaService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Quota/', model).then(successCallback, errorCallback);

    };

    quotaService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Quota', model).then(successCallback, errorCallback);
    };

    quotaService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Quota/ByName', model).then(successCallback, errorCallback);
    };

    return quotaService;
});
directPortalApp.controller('createrelationshipController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editrelationshipController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('relationshipController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('relationship').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('relationshipService', function ($http, __env) {
    var relationshipService = {};

    relationshipService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    relationshipService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/Relationships/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/Translations/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/Notes/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/ByName/' + id).then(successCallback, errorCallback);
    };

    relationshipService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/Activate/' + id).then(successCallback, errorCallback);
    };

    relationshipService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Relationship/Deactivate/' + id).then(successCallback, errorCallback);
    };

    relationshipService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Relationship/Active' + fields).then(successCallback, errorCallback);
    };

    relationshipService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Relationship/' + id + fields).then(successCallback, errorCallback);
    };

    relationshipService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Relationship/' + fields).then(successCallback, errorCallback);
    };

    relationshipService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Relationship/', model).then(successCallback, errorCallback);

    };

    relationshipService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Relationship', model).then(successCallback, errorCallback);
    };

    relationshipService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Relationship/ByName', model).then(successCallback, errorCallback);
    };

    return relationshipService;
});
directPortalApp.controller('createrelationshiptypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editrelationshiptypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('relationshiptypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('relationshiptype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('relationshiptypeService', function ($http, __env) {
    var relationshiptypeService = {};

    relationshiptypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    relationshiptypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Relationships/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Translations/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Notes/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ByName/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Activate/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/Active' + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/' + id + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/' + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/RelationshipType/', model).then(successCallback, errorCallback);

    };

    relationshiptypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/RelationshipType', model).then(successCallback, errorCallback);
    };

    relationshiptypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/RelationshipType/ByName', model).then(successCallback, errorCallback);
    };

    return relationshiptypeService;
});
directPortalApp.controller('createreportController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editreportController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('reportController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('report').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('reportService', function ($http, __env) {
    var reportService = {};

    reportService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reportService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/' + id).then(successCallback, errorCallback);
    };

    reportService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/Relationships/' + id).then(successCallback, errorCallback);
    };

    reportService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reportService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reportService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/Translations/' + id).then(successCallback, errorCallback);
    };

    reportService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/Notes/' + id).then(successCallback, errorCallback);
    };

    reportService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/ByName/' + id).then(successCallback, errorCallback);
    };

    reportService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/Activate/' + id).then(successCallback, errorCallback);
    };

    reportService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Report/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reportService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Report/Active' + fields).then(successCallback, errorCallback);
    };

    reportService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Report/' + id + fields).then(successCallback, errorCallback);
    };

    reportService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Report/' + fields).then(successCallback, errorCallback);
    };

    reportService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Report/', model).then(successCallback, errorCallback);

    };

    reportService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Report', model).then(successCallback, errorCallback);
    };

    reportService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Report/ByName', model).then(successCallback, errorCallback);
    };

    return reportService;
});
directPortalApp.controller('createreservationController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editreservationController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('reservationController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('reservation').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('reservationService', function ($http, __env) {
    var reservationService = {};

    reservationService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reservationService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/' + id).then(successCallback, errorCallback);
    };

    reservationService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/Relationships/' + id).then(successCallback, errorCallback);
    };

    reservationService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reservationService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reservationService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/Translations/' + id).then(successCallback, errorCallback);
    };

    reservationService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/Notes/' + id).then(successCallback, errorCallback);
    };

    reservationService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/ByName/' + id).then(successCallback, errorCallback);
    };

    reservationService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/Activate/' + id).then(successCallback, errorCallback);
    };

    reservationService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Reservation/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reservationService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Reservation/Active' + fields).then(successCallback, errorCallback);
    };

    reservationService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Reservation/' + id + fields).then(successCallback, errorCallback);
    };

    reservationService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Reservation/' + fields).then(successCallback, errorCallback);
    };

    reservationService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Reservation/', model).then(successCallback, errorCallback);

    };

    reservationService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Reservation', model).then(successCallback, errorCallback);
    };

    reservationService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Reservation/ByName', model).then(successCallback, errorCallback);
    };

    return reservationService;
});
directPortalApp.controller('createreservationstatusController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editreservationstatusController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('reservationstatusController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('reservationstatus').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('reservationstatusService', function ($http, __env) {
    var reservationstatusService = {};

    reservationstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reservationstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/Active' + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/' + id + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/' + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ReservationStatus/', model).then(successCallback, errorCallback);

    };

    reservationstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationStatus', model).then(successCallback, errorCallback);
    };

    reservationstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationStatus/ByName', model).then(successCallback, errorCallback);
    };

    return reservationstatusService;
});
directPortalApp.controller('createreservationtypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editreservationtypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('reservationtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('reservationtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('reservationtypeService', function ($http, __env) {
    var reservationtypeService = {};

    reservationtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reservationtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Relationships/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Translations/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Notes/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ByName/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Activate/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/Active' + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/' + id + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/' + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ReservationType/', model).then(successCallback, errorCallback);

    };

    reservationtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationType', model).then(successCallback, errorCallback);
    };

    reservationtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationType/ByName', model).then(successCallback, errorCallback);
    };

    return reservationtypeService;
});
directPortalApp.controller('createruleController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editruleController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('ruleController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('rule').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('ruleService', function ($http, __env) {
    var ruleService = {};

    ruleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    ruleService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/' + id).then(successCallback, errorCallback);
    };

    ruleService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/Relationships/' + id).then(successCallback, errorCallback);
    };

    ruleService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    ruleService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    ruleService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/Translations/' + id).then(successCallback, errorCallback);
    };

    ruleService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/Notes/' + id).then(successCallback, errorCallback);
    };

    ruleService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/ByName/' + id).then(successCallback, errorCallback);
    };

    ruleService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/Activate/' + id).then(successCallback, errorCallback);
    };

    ruleService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Rule/Deactivate/' + id).then(successCallback, errorCallback);
    };

    ruleService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Rule/Active' + fields).then(successCallback, errorCallback);
    };

    ruleService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Rule/' + id + fields).then(successCallback, errorCallback);
    };

    ruleService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Rule/' + fields).then(successCallback, errorCallback);
    };

    ruleService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Rule/', model).then(successCallback, errorCallback);

    };

    ruleService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Rule', model).then(successCallback, errorCallback);
    };

    ruleService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Rule/ByName', model).then(successCallback, errorCallback);
    };

    return ruleService;
});
directPortalApp.controller('createsaleController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsaleController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('saleController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('sale').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('saleService', function ($http, __env) {
    var saleService = {};

    saleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    saleService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/' + id).then(successCallback, errorCallback);
    };

    saleService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/Relationships/' + id).then(successCallback, errorCallback);
    };

    saleService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    saleService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    saleService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/Translations/' + id).then(successCallback, errorCallback);
    };

    saleService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/Notes/' + id).then(successCallback, errorCallback);
    };

    saleService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/ByName/' + id).then(successCallback, errorCallback);
    };

    saleService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/Activate/' + id).then(successCallback, errorCallback);
    };

    saleService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Sale/Deactivate/' + id).then(successCallback, errorCallback);
    };

    saleService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Sale/Active' + fields).then(successCallback, errorCallback);
    };

    saleService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Sale/' + id + fields).then(successCallback, errorCallback);
    };

    saleService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Sale/' + fields).then(successCallback, errorCallback);
    };

    saleService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Sale/', model).then(successCallback, errorCallback);

    };

    saleService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Sale', model).then(successCallback, errorCallback);
    };

    saleService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Sale/ByName', model).then(successCallback, errorCallback);
    };

    return saleService;
});
directPortalApp.controller('createsalesrequestController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsalesrequestController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('salesrequestController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('salesrequest').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('salesrequestService', function ($http, __env) {
    var salesrequestService = {};

    salesrequestService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salesrequestService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Relationships/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Translations/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Notes/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/ByName/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Activate/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequest/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salesrequestService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/Active' + fields).then(successCallback, errorCallback);
    };

    salesrequestService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/' + id + fields).then(successCallback, errorCallback);
    };

    salesrequestService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequest/' + fields).then(successCallback, errorCallback);
    };

    salesrequestService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SalesRequest/', model).then(successCallback, errorCallback);

    };

    salesrequestService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequest', model).then(successCallback, errorCallback);
    };

    salesrequestService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequest/ByName', model).then(successCallback, errorCallback);
    };

    return salesrequestService;
});
directPortalApp.controller('createsalesrequesttypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsalesrequesttypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('salesrequesttypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('salesrequesttype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('salesrequesttypeService', function ($http, __env) {
    var salesrequesttypeService = {};

    salesrequesttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salesrequesttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Relationships/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Translations/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Notes/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/ByName/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Activate/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SalesRequestType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/Active' + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/' + id + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SalesRequestType/' + fields).then(successCallback, errorCallback);
    };

    salesrequesttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SalesRequestType/', model).then(successCallback, errorCallback);

    };

    salesrequesttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequestType', model).then(successCallback, errorCallback);
    };

    salesrequesttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SalesRequestType/ByName', model).then(successCallback, errorCallback);
    };

    return salesrequesttypeService;
});
directPortalApp.controller('createsalestatusController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsalestatusController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('salestatusController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('salestatus').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('salestatusService', function ($http, __env) {
    var salestatusService = {};

    salestatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salestatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    salestatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    salestatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salestatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatus/Active' + fields).then(successCallback, errorCallback);
    };

    salestatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatus/' + id + fields).then(successCallback, errorCallback);
    };

    salestatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatus/' + fields).then(successCallback, errorCallback);
    };

    salestatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SaleStatus/', model).then(successCallback, errorCallback);

    };

    salestatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatus', model).then(successCallback, errorCallback);
    };

    salestatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatus/ByName', model).then(successCallback, errorCallback);
    };

    return salestatusService;
});
directPortalApp.controller('createsalestatustypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsalestatustypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('salestatustypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('salestatustype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('salestatustypeService', function ($http, __env) {
    var salestatustypeService = {};

    salestatustypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    salestatustypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Relationships/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Translations/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Notes/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/ByName/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Activate/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/SaleStatusType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    salestatustypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/Active' + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/' + id + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/SaleStatusType/' + fields).then(successCallback, errorCallback);
    };

    salestatustypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/SaleStatusType/', model).then(successCallback, errorCallback);

    };

    salestatustypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatusType', model).then(successCallback, errorCallback);
    };

    salestatustypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/SaleStatusType/ByName', model).then(successCallback, errorCallback);
    };

    return salestatustypeService;
});
directPortalApp.controller('createsubscriptionController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editsubscriptionController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('subscriptionController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('subscription').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('subscriptionService', function ($http, __env) {
    var subscriptionService = {};

    subscriptionService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    subscriptionService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Relationships/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Translations/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Notes/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ByName/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Activate/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Deactivate/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/Active' + fields).then(successCallback, errorCallback);
    };

    subscriptionService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/' + id + fields).then(successCallback, errorCallback);
    };

    subscriptionService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/' + fields).then(successCallback, errorCallback);
    };

    subscriptionService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Subscription/', model).then(successCallback, errorCallback);

    };

    subscriptionService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Subscription', model).then(successCallback, errorCallback);
    };

    subscriptionService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Subscription/ByName', model).then(successCallback, errorCallback);
    };

    return subscriptionService;
});
directPortalApp.controller('createtaskController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('edittaskController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('taskController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('task').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('taskService', function ($http, __env) {
    var taskService = {};

    taskService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    taskService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/' + id).then(successCallback, errorCallback);
    };

    taskService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/Relationships/' + id).then(successCallback, errorCallback);
    };

    taskService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    taskService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    taskService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/Translations/' + id).then(successCallback, errorCallback);
    };

    taskService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/Notes/' + id).then(successCallback, errorCallback);
    };

    taskService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/ByName/' + id).then(successCallback, errorCallback);
    };

    taskService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/Activate/' + id).then(successCallback, errorCallback);
    };

    taskService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Task/Deactivate/' + id).then(successCallback, errorCallback);
    };

    taskService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Task/Active' + fields).then(successCallback, errorCallback);
    };

    taskService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Task/' + id + fields).then(successCallback, errorCallback);
    };

    taskService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Task/' + fields).then(successCallback, errorCallback);
    };

    taskService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Task/', model).then(successCallback, errorCallback);

    };

    taskService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Task', model).then(successCallback, errorCallback);
    };

    taskService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Task/ByName', model).then(successCallback, errorCallback);
    };

    return taskService;
});
directPortalApp.controller('createtemplateController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('edittemplateController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('templateController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('template').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('templateService', function ($http, __env) {
    var templateService = {};

    templateService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    templateService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/' + id).then(successCallback, errorCallback);
    };

    templateService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/Relationships/' + id).then(successCallback, errorCallback);
    };

    templateService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    templateService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    templateService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/Translations/' + id).then(successCallback, errorCallback);
    };

    templateService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/Notes/' + id).then(successCallback, errorCallback);
    };

    templateService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/ByName/' + id).then(successCallback, errorCallback);
    };

    templateService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/Activate/' + id).then(successCallback, errorCallback);
    };

    templateService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Template/Deactivate/' + id).then(successCallback, errorCallback);
    };

    templateService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Template/Active' + fields).then(successCallback, errorCallback);
    };

    templateService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Template/' + id + fields).then(successCallback, errorCallback);
    };

    templateService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Template/' + fields).then(successCallback, errorCallback);
    };

    templateService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Template/', model).then(successCallback, errorCallback);

    };

    templateService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Template', model).then(successCallback, errorCallback);
    };

    templateService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Template/ByName', model).then(successCallback, errorCallback);
    };

    return templateService;
});
directPortalApp.controller('createtranslationController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('edittranslationController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('translationController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('translation').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('translationService', function ($http, __env) {
    var translationService = {};

    translationService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    translationService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/' + id).then(successCallback, errorCallback);
    };

    translationService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/Relationships/' + id).then(successCallback, errorCallback);
    };

    translationService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    translationService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    translationService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/Translations/' + id).then(successCallback, errorCallback);
    };

    translationService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/Notes/' + id).then(successCallback, errorCallback);
    };

    translationService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/ByName/' + id).then(successCallback, errorCallback);
    };

    translationService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/Activate/' + id).then(successCallback, errorCallback);
    };

    translationService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Translation/Deactivate/' + id).then(successCallback, errorCallback);
    };

    translationService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Translation/Active' + fields).then(successCallback, errorCallback);
    };

    translationService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Translation/' + id + fields).then(successCallback, errorCallback);
    };

    translationService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Translation/' + fields).then(successCallback, errorCallback);
    };

    translationService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Translation/', model).then(successCallback, errorCallback);

    };

    translationService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Translation', model).then(successCallback, errorCallback);
    };

    translationService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Translation/ByName', model).then(successCallback, errorCallback);
    };

    return translationService;
});
directPortalApp.controller('createunitController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editunitController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('unitController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('unit').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('unitService', function ($http, __env) {
    var unitService = {};

    unitService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/' + id).then(successCallback, errorCallback);
    };

    unitService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/Translations/' + id).then(successCallback, errorCallback);
    };

    unitService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/Notes/' + id).then(successCallback, errorCallback);
    };

    unitService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/ByName/' + id).then(successCallback, errorCallback);
    };

    unitService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/Activate/' + id).then(successCallback, errorCallback);
    };

    unitService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Unit/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Unit/Active' + fields).then(successCallback, errorCallback);
    };

    unitService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Unit/' + id + fields).then(successCallback, errorCallback);
    };

    unitService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Unit/' + fields).then(successCallback, errorCallback);
    };

    unitService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Unit/', model).then(successCallback, errorCallback);

    };

    unitService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Unit', model).then(successCallback, errorCallback);
    };

    unitService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Unit/ByName', model).then(successCallback, errorCallback);
    };

    return unitService;
});
directPortalApp.controller('createunitquotaController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editunitquotaController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('unitquotaController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('unitquota').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('unitquotaService', function ($http, __env) {
    var unitquotaService = {};

    unitquotaService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitquotaService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Translations/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Notes/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ByName/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Activate/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/Active' + fields).then(successCallback, errorCallback);
    };

    unitquotaService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/' + id + fields).then(successCallback, errorCallback);
    };

    unitquotaService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/' + fields).then(successCallback, errorCallback);
    };

    unitquotaService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitQuota/', model).then(successCallback, errorCallback);

    };

    unitquotaService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitQuota', model).then(successCallback, errorCallback);
    };

    unitquotaService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitQuota/ByName', model).then(successCallback, errorCallback);
    };

    return unitquotaService;
});
directPortalApp.controller('createunitstatusController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editunitstatusController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('unitstatusController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('unitstatus').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('unitstatusService', function ($http, __env) {
    var unitstatusService = {};

    unitstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/Active' + fields).then(successCallback, errorCallback);
    };

    unitstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/' + id + fields).then(successCallback, errorCallback);
    };

    unitstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/' + fields).then(successCallback, errorCallback);
    };

    unitstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitStatus/', model).then(successCallback, errorCallback);

    };

    unitstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitStatus', model).then(successCallback, errorCallback);
    };

    unitstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitStatus/ByName', model).then(successCallback, errorCallback);
    };

    return unitstatusService;
});
directPortalApp.controller('createunitsubtypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editunitsubtypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('unitsubtypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('unitsubtype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('unitsubtypeService', function ($http, __env) {
    var unitsubtypeService = {};

    unitsubtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitsubtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Translations/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Notes/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ByName/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Activate/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/Active' + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/' + id + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/' + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitSubType/', model).then(successCallback, errorCallback);

    };

    unitsubtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitSubType', model).then(successCallback, errorCallback);
    };

    unitsubtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitSubType/ByName', model).then(successCallback, errorCallback);
    };

    return unitsubtypeService;
});
directPortalApp.controller('createunittypeController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editunittypeController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('unittypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('unittype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('unittypeService', function ($http, __env) {
    var unittypeService = {};

    unittypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unittypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/Relationships/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/Translations/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/Notes/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/ByName/' + id).then(successCallback, errorCallback);
    };

    unittypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/Activate/' + id).then(successCallback, errorCallback);
    };

    unittypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unittypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitType/Active' + fields).then(successCallback, errorCallback);
    };

    unittypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitType/' + id + fields).then(successCallback, errorCallback);
    };

    unittypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitType/' + fields).then(successCallback, errorCallback);
    };

    unittypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitType/', model).then(successCallback, errorCallback);

    };

    unittypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitType', model).then(successCallback, errorCallback);
    };

    unittypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitType/ByName', model).then(successCallback, errorCallback);
    };

    return unittypeService;
});
directPortalApp.controller('createwebpageController', function ($scope, $rootScope, $state, serviceWrapper) {
    
    // maybe no need, remove and test create people
    $scope.model = {};

});
directPortalApp.controller('editwebpageController', function ($scope, $stateParams, serviceWrapper) {

    $scope.ressourceId = $stateParams.id;

});
directPortalApp.controller('webpageController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('webpage').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});
directPortalApp.factory('webpageService', function ($http, __env) {
    var webpageService = {};

    webpageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    webpageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/' + id).then(successCallback, errorCallback);
    };

    webpageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/Relationships/' + id).then(successCallback, errorCallback);
    };

    webpageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    webpageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    webpageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/Translations/' + id).then(successCallback, errorCallback);
    };

    webpageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/Notes/' + id).then(successCallback, errorCallback);
    };

    webpageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/ByName/' + id).then(successCallback, errorCallback);
    };

    webpageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/Activate/' + id).then(successCallback, errorCallback);
    };

    webpageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/WebPage/Deactivate/' + id).then(successCallback, errorCallback);
    };

    webpageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/WebPage/Active' + fields).then(successCallback, errorCallback);
    };

    webpageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/WebPage/' + id + fields).then(successCallback, errorCallback);
    };

    webpageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/WebPage/' + fields).then(successCallback, errorCallback);
    };

    webpageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/WebPage/', model).then(successCallback, errorCallback);

    };

    webpageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/WebPage', model).then(successCallback, errorCallback);
    };

    webpageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/WebPage/ByName', model).then(successCallback, errorCallback);
    };

    return webpageService;
});
