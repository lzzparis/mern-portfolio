var React = require("react");
var shallow = require("enzyme").shallow;
var expect = require("chai").expect;
var should = require("chai").should();

var App = require("../../client/js/components/app");
var AppWrapper = shallow(<App />);
describe("App component", function() {
	it("should render", function() {
		AppWrapper.should.have.length(1);
	});
});

var Bio = require("../../client/js/components/bio");
var BioWrapper = shallow(<Bio />);
describe("Bio component", function() {
	it("should render", function() {
		BioWrapper.should.have.length(1);
	});
});

var BusinessCard = require("../../client/js/components/business-card");
var BusinessCardWrapper = shallow(<BusinessCard />);
describe("BusinessCard component", function() {
	it("should render", function() {
		BusinessCardWrapper.should.have.length(1);
	});
});

var Contact = require("../../client/js/components/contact");
var ContactWrapper = shallow(<Contact />);
describe("Contact component", function() {
	it("should render", function() {
		ContactWrapper.should.have.length(1);
	});
});

var Project = require("../../client/js/components/project");
var ProjectWrapper = shallow(<Project />);
describe("Project component", function() {
	it("should render", function() {
		ProjectWrapper.should.have.length(1);
	});
});

var ProjectList = require("../../client/js/components/project-list");
var ProjectListWrapper = shallow(<Project />);
describe("ProjectList component", function() {
	it("should render", function() {
		ProjectListWrapper.should.have.length(1);
	});
});

