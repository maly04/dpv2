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