﻿directPortalApp.controller("phonebookController", function ($scope, $http, serviceWrapper, phonebookModuleService) { 

    phonebookModuleService.get(function (response) {
        $scope.persons = response.data.Contacts;
        console.log($scope.persons);
    });
    //$scope.list_of_string = ['tag1', 'tag2']
    $scope.select2Options1 = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
    };
    $scope.select2Options2 = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
    };  

    //$http.get(_env.apiUrl + 'modules/phonebook/Contacts').
    //    then(function (response) {
    //        $scope.persons = response.data.Contacts;
    //});
   
    $scope.body = '';
    $scope.subject = '';
    $scope.TO = [];
    $scope.CC = [];
    $scope.BCC = [];

    //serviceWrapper.get('Person').getAll('', function (response) {
    //    $scope.persons = response.data;
    //});

    function createMailtoLink(TO, CC, BCC, subject, body) {

        var link = 'mailto:' + $scope.TO.join(',') + '?'
            + ($scope.subject.length > 0 ? 'subject=' + $scope.subject : 'subject=%20')
            + ($scope.body.length > 0 ? '&body=' + $scope.body : '&body=%20')
            + ($scope.CC.length > 0 ? '&cc=' + $scope.CC.join(',') : '')
            + ($scope.BCC.length > 0 ? '&bcc=' + $scope.BCC.join(',') : '');
        console.log(link);
        return link;
    }

    $scope.mailto = function () {

        //if ($scope.TO.length < 1) {
        //    alert('you must set recipient');
        //    return false;
        //}
        //link = createMailtoLink($scope.TO, $scope.CC, $scope.BCC, $scope.subject, $scope.body);
        //window.location.href = link;
        $scope.messageType = 'SMS';
        if ($scope.messageType == 'SMS') {

            messagingModuleService.sendSms();

        } else {
            messagingModuleService.sendEmail();
        }

    }

    $scope.setContact = function (contactType, person) {
        if (['TO', 'CC', 'BCC'].indexOf(contactType) === -1) {
            alert('invalid');
            return false;
        }
        // person already exist, we delete him from the model and refresh the textarea
        console.log($scope[contactType].indexOf(person.EmailAddress));
        if ((i = $scope[contactType].indexOf(person.EmailAddress)) === -1) {
            $scope[contactType].push(person.EmailAddress);
            //$scope[contactType].push(person.Name + '@direct-portal.com');
            document.getElementById(contactType).innerText = $scope[contactType].join(',');
        }
        // dont exist, we add it to the model and refresh the textarea
        else {
            $scope[contactType] = [];
            console.log($scope[contactType]);
            //$scope[contactType].splice(i, 1);
            $scope[contactType].push(person.EmailAddress);
            document.getElementById(contactType).innerText = $scope[contactType].join(',');
        }

    }
    $scope.reset = function (contactType) {
        document.getElementById(contactType).innerText = '';
    };

    $scope.personsType = [
        {
            Type: 'Sales'
        },
        {
            Type: 'Marketing'
        },
        {
            Type: 'Construction'
        },
        {
            Type: 'Other Staff'
        },
        {
            Type: 'Management'
        },
        {
            Type: 'Accounting'
        },
        {
            Type: 'Suppliers'
        },
        {
            Type: 'Customers'
        },
        {
            Type: 'Prospects'
        },
        {
            Type: 'My Team'
        },
        {
            Type: 'Agencies Local'
        },
        {
            Type: 'Agencies DP'
        },


    ];
    $scope.setColor = function (type) {
        
        if (type == 'Sales' || type== 'Admin / CEO') {
            return 'setActive';
        }
    };
    $scope.topPersons = [
        { Type: 'Admin / CEO' },
        { Type: 'Staff' },

    ];
    // Note********************** Other info of each person type
//    Sales
//    position
//    closing rate
//    position description
//    company or project association
//    name, last name
//    mobile(company)
//    email(company)
//    im
//    language
//    age
//    rank
//    seniority
//    number of sales
//    most recent sales
//    customer list
//    prospect list
//    agency association
//    rating
//    stars
//    complaints
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Marketing
//	position
//	position description
//	closing rate
//	company or project association
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	age
//	rank
//	seniority
//	number of sales
//	most recent sales
//	customer list
//	prospect list
//	agency association
//	rating
//	stars
//	complaints
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Construction
//	position
//	position description
//	company or project association
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	age
//	rank
//	seniority
//	allow sale
//	number of sales
//	most recent sales
//	customer list
//	prospect list
//	agency association
//	rating
//	stars
//	complaints
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Drivers
//	position
//	position description
//	company or project association
//	area of activity (radius)
//	current location on map
//	name, last name
//	mobile (company)
//	im
//	language
//	private data
//		phone
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Other Staff
//	position
//	position description
//	company or project association
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	age
//	rank
//	seniority
//	number of sales
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Management
//	position
//	position description
//	company or project association
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	age
//	rank
//	seniority
//	number of sales
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//	allow approvals
//Accounting
//	position
//	position description
//	company or project association
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	age
//	rank
//	seniority
//	number of sales
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Suppliers
//	product type
//	recent offers
//	company name
//	position description
//		rank
//		seniority
//	company or project association
//	area of activity (map radius)
//	offices location on map
//	name, last name
//	mobile (company)
//	email (company)
//	im
//	language
//	private data
//		phone
//		email
//		address
//	allow sale
//	contract valid
//		start/ end date, days remaining
//	active/ employee / freelance / quit / removed / company
//	regular commission
//	shared commission
//	special commission arrangements
//Customers
//	rating
//	early adopter
//	personality
//	type (investor / holiday / home owner)
//	last contacted / contacted by
//	total purchases
//	unit list -> statments
//	current overall balance
//	last payment date
//	recent purchanses
//	recent contact date
//		recent communications with
//	recent offers
//position description
//company name
//rank
//seniority
//associations(to other entities in the system)
//name, last name
//responsiveness
//mobile(company)
//email(company)
//im
//language
//	private data
//phone
//email
//address
//area of activity
//offices location on map

//Prospects
//potential(to become rating)
//type(investor / holiday / home owner)
//last contacted / contacted by
//project / unit shortlist
//current status (pre booking, crm detail percent)
//known since
//known location
//associations(to other entities in the system)
//recent contact date
//recent communications with
//	recent offers
//position description
//company name
//rank
//seniority
//personality
//name, last name
//responsiveness
//language
//	private data
//phone
//email
//im
//address
//mobile(company)
//email(company)
//area of activity
//offices location on map

//My Team
//    (list of same rank)

//Agencies Local
//rating
//closing rate
//stars
//complaints
//first sale date
//last sale date
//number of sales
//sales per year/ month
//most sales in project
//position description
//company or project association
//area of activity
//offices location on map
//most senior contact person
//name, last name
//mobile(company)
//email(company)
//im
//language
//age
//rank
//seniority
//number os sales (private)
//		private data
//phone
//email
//address
//number of employees
//sales / employee list
//customer list
//prospect list
//seller association
//allow sale
//contract valid
//start / end date, days remaining
//active / employee / freelance / quit / removed / company
//regular commission
//shared commission

//Agencies DP


    //--------------Diagram

    function init() {
        var $ = go.GraphObject.make;  // for conciseness in defining templates

        myDiagram =
            $(go.Diagram, "myDiagramDiv", // must be the ID or reference to div
                {
                    initialContentAlignment: go.Spot.Center,
                    maxSelectionCount: 1, // users can select only one part at a time
                    validCycle: go.Diagram.CycleDestinationTree, // make sure users can only create trees
                    "clickCreatingTool.archetypeNodeData": {}, // allow double-click in background to create a new node
                    "clickCreatingTool.insertPart": function (loc) {  // customize the data for the new node
                        this.archetypeNodeData = {
                            key: getNextKey(), // assign the key based on the number of nodes
                            name: "(new person)",
                            title: ""
                        };
                        return go.ClickCreatingTool.prototype.insertPart.call(this, loc);
                    },
                    layout:
                    $(go.TreeLayout,
                        {
                            treeStyle: go.TreeLayout.StyleLastParents,
                            arrangement: go.TreeLayout.ArrangementHorizontal,
                            // properties for most of the tree:
                            angle: 90,
                            layerSpacing: 35,
                            // properties for the "last parents":
                            alternateAngle: 90,
                            alternateLayerSpacing: 35,
                            alternateAlignment: go.TreeLayout.AlignmentBus,
                            alternateNodeSpacing: 20
                        }),
                    "undoManager.isEnabled": true // enable undo & redo
                });

        // when the document is modified, add a "*" to the title and enable the "Save" button
        myDiagram.addDiagramListener("Modified", function (e) {
            var button = document.getElementById("SaveButton");
            if (button) button.disabled = !myDiagram.isModified;
            var idx = document.title.indexOf("*");
            if (myDiagram.isModified) {
                if (idx < 0) document.title += "*";
            } else {
                if (idx >= 0) document.title = document.title.substr(0, idx);
            }
        });

        // manage boss info manually when a node or link is deleted from the diagram
        myDiagram.addDiagramListener("SelectionDeleting", function (e) {
            var part = e.subject.first(); // e.subject is the myDiagram.selection collection,
            // so we'll get the first since we know we only have one selection
            myDiagram.startTransaction("clear boss");
            if (part instanceof go.Node) {
                var it = part.findTreeChildrenNodes(); // find all child nodes
                while (it.next()) { // now iterate through them and clear out the boss information
                    var child = it.value;
                    var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
                    if (bossText === null) return;
                    bossText.text = "";
                }
            } else if (part instanceof go.Link) {
                var child = part.toNode;
                var bossText = child.findObject("boss"); // since the boss TextBlock is named, we can access it by name
                if (bossText === null) return;
                bossText.text = "";
            }
            myDiagram.commitTransaction("clear boss");
        });

        var levelColors = ["#AC193D", "#2672EC", "#8C0095", "#5133AB",
            "#008299", "#D24726", "#008A00", "#094AB2"];

        // override TreeLayout.commitNodes to also modify the background brush based on the tree depth level
        myDiagram.layout.commitNodes = function () {
            go.TreeLayout.prototype.commitNodes.call(myDiagram.layout);  // do the standard behavior
            // then go through all of the vertexes and set their corresponding node's Shape.fill
            // to a brush dependent on the TreeVertex.level value
            myDiagram.layout.network.vertexes.each(function (v) {
                if (v.node) {
                    var level = v.level % (levelColors.length);
                    var color = levelColors[level];
                    var shape = v.node.findObject("SHAPE");
                    if (shape) shape.fill = $(go.Brush, "Linear", { 0: color, 1: go.Brush.lightenBy(color, 0.05), start: go.Spot.Left, end: go.Spot.Right });
                }
            });
        };

        // This function is used to find a suitable ID when modifying/creating nodes.
        // We used the counter combined with findNodeDataForKey to ensure uniqueness.
        function getNextKey() {
            var key = nodeIdCounter;
            while (myDiagram.model.findNodeDataForKey(key) !== null) {
                key = nodeIdCounter--;
            }
            return key;
        }

        var nodeIdCounter = -1; // use a sequence to guarantee key uniqueness as we add/remove/modify nodes

        // when a node is double-clicked, add a child to it
        function nodeDoubleClick(e, obj) {
            var clicked = obj.part;
            if (clicked !== null) {
                var thisemp = clicked.data;
                myDiagram.startTransaction("add employee");
                var newemp = { key: getNextKey(), name: "(new person)", title: "", parent: thisemp.key };
                myDiagram.model.addNodeData(newemp);
                myDiagram.commitTransaction("add employee");
            }
        }

        // this is used to determine feedback during drags
        function mayWorkFor(node1, node2) {
            if (!(node1 instanceof go.Node)) return false;  // must be a Node
            if (node1 === node2) return false;  // cannot work for yourself
            if (node2.isInTreeOf(node1)) return false;  // cannot work for someone who works for you
            return true;
        }

        // This function provides a common style for most of the TextBlocks.
        // Some of these values may be overridden in a particular TextBlock.
        function textStyle() {
            return { font: "9pt  Segoe UI,sans-serif", stroke: "white" };
        }

        // This converter is used by the Picture.
        function findHeadShot(key) {
            if (key < 0 || key > 16) return "images/HSnopic.png"; // There are only 16 images on the server
            return "directPortal/modules/phonebook/images/"+ key + ".jpg"
        }

        // define the Node template
        myDiagram.nodeTemplate =
            $(go.Node, "Auto",
                { doubleClick: nodeDoubleClick },
                { // handle dragging a Node onto a Node to (maybe) change the reporting relationship
                    mouseDragEnter: function (e, node, prev) {
                        var diagram = node.diagram;
                        var selnode = diagram.selection.first();
                        if (!mayWorkFor(selnode, node)) return;
                        var shape = node.findObject("SHAPE");
                        if (shape) {
                            shape._prevFill = shape.fill;  // remember the original brush
                            shape.fill = "darkred";
                        }
                    },
                    mouseDragLeave: function (e, node, next) {
                        var shape = node.findObject("SHAPE");
                        if (shape && shape._prevFill) {
                            shape.fill = shape._prevFill;  // restore the original brush
                        }
                    },
                    mouseDrop: function (e, node) {
                        var diagram = node.diagram;
                        var selnode = diagram.selection.first();  // assume just one Node in selection
                        if (mayWorkFor(selnode, node)) {
                            // find any existing link into the selected node
                            var link = selnode.findTreeParentLink();
                            if (link !== null) {  // reconnect any existing link
                                link.fromNode = node;
                            } else {  // else create a new link
                                diagram.toolManager.linkingTool.insertLink(node, node.port, selnode, selnode.port);
                            }
                        }
                    }
                },
                // for sorting, have the Node.text be the data.name
                new go.Binding("text", "name"),
                // bind the Part.layerName to control the Node's layer depending on whether it isSelected
                new go.Binding("layerName", "isSelected", function (sel) { return sel ? "Foreground" : ""; }).ofObject(),
                // define the node's outer shape
                $(go.Shape, "Rectangle",
                    {
                        name: "SHAPE", fill: "white", stroke: null,
                        // set the port properties:
                        portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer"
                    }),
                $(go.Panel, "Horizontal",
                    $(go.Picture,
                        {
                            name: "Picture",
                            desiredSize: new go.Size(39, 50),
                            margin: new go.Margin(6, 8, 6, 10),
                        },
                        new go.Binding("source", "key", findHeadShot)),
                    // define the panel where the text will appear
                    $(go.Panel, "Table",
                        {
                            maxSize: new go.Size(150, 999),
                            margin: new go.Margin(6, 10, 0, 3),
                            defaultAlignment: go.Spot.Left
                        },
                        $(go.RowColumnDefinition, { column: 2, width: 4 }),
                        $(go.TextBlock, textStyle(),  // the name
                            {
                                row: 0, column: 0, columnSpan: 5,
                                font: "12pt Segoe UI,sans-serif",
                                editable: true, isMultiline: false,
                                minSize: new go.Size(10, 16)
                            },
                            new go.Binding("text", "name").makeTwoWay()),
                        $(go.TextBlock, "Title: ", textStyle(),
                            { row: 1, column: 0 }),
                        $(go.TextBlock, textStyle(),
                            {
                                row: 1, column: 1, columnSpan: 4,
                                editable: true, isMultiline: false,
                                minSize: new go.Size(10, 14),
                                margin: new go.Margin(0, 0, 0, 3)
                            },
                            new go.Binding("text", "title").makeTwoWay()),
                        $(go.TextBlock, textStyle(),
                            { row: 2, column: 0 },
                            new go.Binding("text", "key", function (v) { return "ID: " + v; })),
                        $(go.TextBlock, textStyle(),
                            { name: "boss", row: 2, column: 3, }, // we include a name so we can access this TextBlock when deleting Nodes/Links
                            new go.Binding("text", "parent", function (v) { return "Boss: " + v; })),
                        $(go.TextBlock, textStyle(),  // the comments
                            {
                                row: 3, column: 0, columnSpan: 5,
                                font: "italic 9pt sans-serif",
                                wrap: go.TextBlock.WrapFit,
                                editable: true,  // by default newlines are allowed
                                minSize: new go.Size(10, 14)
                            },
                            new go.Binding("text", "comments").makeTwoWay())
                    )  // end Table Panel
                ) // end Horizontal Panel
            );  // end Node

        // the context menu allows users to make a position vacant,
        // remove a role and reassign the subtree, or remove a department
        myDiagram.nodeTemplate.contextMenu =
            $(go.Adornment, "Vertical",
                $("ContextMenuButton",
                    $(go.TextBlock, "Vacate Position"),
                    {
                        click: function (e, obj) {
                            var node = obj.part.adornedPart;
                            if (node !== null) {
                                var thisemp = node.data;
                                myDiagram.startTransaction("vacate");
                                // update the key, name, and comments
                                myDiagram.model.setKeyForNodeData(thisemp, getNextKey());
                                myDiagram.model.setDataProperty(thisemp, "name", "(Vacant)");
                                myDiagram.model.setDataProperty(thisemp, "comments", "");
                                myDiagram.commitTransaction("vacate");
                            }
                        }
                    }
                ),
                $("ContextMenuButton",
                    $(go.TextBlock, "Remove Role"),
                    {
                        click: function (e, obj) {
                            // reparent the subtree to this node's boss, then remove the node
                            var node = obj.part.adornedPart;
                            if (node !== null) {
                                myDiagram.startTransaction("reparent remove");
                                var chl = node.findTreeChildrenNodes();
                                // iterate through the children and set their parent key to our selected node's parent key
                                while (chl.next()) {
                                    var emp = chl.value;
                                    myDiagram.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
                                }
                                // and now remove the selected node itself
                                myDiagram.model.removeNodeData(node.data);
                                myDiagram.commitTransaction("reparent remove");
                            }
                        }
                    }
                ),
                $("ContextMenuButton",
                    $(go.TextBlock, "Remove Department"),
                    {
                        click: function (e, obj) {
                            // remove the whole subtree, including the node itself
                            var node = obj.part.adornedPart;
                            if (node !== null) {
                                myDiagram.startTransaction("remove dept");
                                myDiagram.removeParts(node.findTreeParts());
                                myDiagram.commitTransaction("remove dept");
                            }
                        }
                    }
                )
            );

        // define the Link template
        myDiagram.linkTemplate =
            $(go.Link, go.Link.Orthogonal,
                { corner: 5, relinkableFrom: true, relinkableTo: true },
                $(go.Shape, { strokeWidth: 4, stroke: "#00a4a4" }));  // the link shape

        // read in the JSON-format data from the "mySavedModel" element
        load();


        // support editing the properties of the selected person in HTML
        if (window.Inspector) myInspector = new Inspector("myInspector", myDiagram,
            {
                properties: {
                    "key": { readOnly: true },
                    "comments": {}
                }
            });
    }

    // Show the diagram's model in JSON format
    function save() {
        document.getElementById("mySavedModel").value = myDiagram.model.toJson();
        myDiagram.isModified = false;
    }
    function load() {
        myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    }

    init();



    //Map 

    var raster = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point([0, 0]),
        name: 'Null Island',
        population: 4000,
        rainfall: 500
    });

    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
            anchor: [0.5, 46],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: 'https://openlayers.org/en/v4.2.0/examples/data/icon.png'
        }))
    });

    iconFeature.setStyle(iconStyle);

    var source = new ol.source.Vector({ wrapX: false });

    var vector = new ol.layer.Vector({
        source: source
    });
    var map = new ol.Map({
        layers: [raster, vector],
        target: 'map',
        view: new ol.View({
            center: [13.70875, 100.53353],
            zoom: 4
        })
    });

    var typeSelect = 'Polygon';

    var draw; // global so we can remove it later
    function addInteraction() {
        var value = 'Polygon';
        if (value !== 'None') {
            draw = new ol.interaction.Draw({
                source: source,
                type: /** @type {ol.geom.GeometryType} */'Polygon'
            });
            map.addInteraction(draw);
            console.log("*******Drawing******");
            console.log(draw);
        }
    }


    /**
     * Handle change event.
     */
    typeSelect.onchange = function () {
        map.removeInteraction(draw);
        addInteraction();
        console.log(addInteraction());
    };

    addInteraction();

});