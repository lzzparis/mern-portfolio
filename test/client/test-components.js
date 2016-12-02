var React = require("react");
var shallow = require("enzyme").shallow;
var expect = require("chai").expect;
var should = require("chai").should();

var dispatch = function() {
  return;
};
var POSTS = require("../sample-data");

var Admin = require("../../client/js/components/admin");
var AdminWrapper = shallow(<Admin />);
describe("(Component) Admin", function() {
	it("renders", function() {
		AdminWrapper.should.have.length(1);
	});
});


var App = require("../../client/js/components/app");
var AppWrapper = shallow(<App />);
describe("(Component) App", function() {
	it("renders", function() {
		AppWrapper.should.have.length(1);
	});
});


var Blog = require("../../client/js/components/blog");
var BlogWrapper = shallow(<Blog />);
describe("(Component) Blog", function() {
	it("renders", function() {
		BlogWrapper.should.have.length(1);
	});
});


var BlogHeader = require("../../client/js/components/blog-header");
var BlogHeaderWrapper = shallow(<BlogHeader />);
describe("(Component) BlogHeader", function() {
	it("renders", function() {
		BlogHeaderWrapper.should.have.length(1);
	});
});


var BlogMain = require("../../client/js/components/blog-main");
var BlogMainWrapper = shallow(<BlogMain />);
describe("(Component) BlogMain", function() {
	it("renders", function() {
		BlogMainWrapper.should.have.length(1);
	});
});


var BlogNav = require("../../client/js/components/blog-nav");
var BlogNavWrapper = shallow(<BlogNav />);
describe("(Component) BlogNav", function() {
	it("renders", function() {
		BlogNavWrapper.should.have.length(1);
	});
});


var FullPost = require("../../client/js/components/full-post");
var FullPostWrapper = shallow(<FullPost dispatch={dispatch} post={POSTS[0]}/>);
describe("(Component) FullPost", function() {
	it("renders", function() {
		FullPostWrapper.should.have.length(1);
	});
});


var LatestPosts = require("../../client/js/components/latest-posts");
var LatestPostsWrapper = shallow(<LatestPosts dispatch={dispatch} posts={POSTS}/>);
describe("(Component) LatestPosts", function() {
	it("renders", function() {
		LatestPostsWrapper.should.have.length(1);
	});
});


var Login = require("../../client/js/components/login");
var LoginWrapper = shallow(<Login />);
describe("(Component) Login", function() {
	it("renders", function() {
		LoginWrapper.should.have.length(1);
	});
});


var PostForm = require("../../client/js/components/post-form");
var PostFormWrapper = shallow(<PostForm />);
describe("(Component) PostForm", function() {
	it("renders", function() {
		PostFormWrapper.should.have.length(1);
	});
});


var PostList = require("../../client/js/components/post-list");
var PostListWrapper = shallow(<PostList dispatch={dispatch} posts={POSTS} />);
describe("(Component) PostList", function() {
	it("renders", function() {
		PostListWrapper.should.have.length(1);
	});
});


var PostSummary = require("../../client/js/components/post-summary");
var PostSummaryWrapper = shallow(<PostSummary post={POSTS[0]} />);
describe("(Component) PostSummary", function() {
	it("renders", function() {
		PostSummaryWrapper.should.have.length(1);
	});
});


var PreviewPost = require("../../client/js/components/preview-post");
var PreviewPostWrapper = shallow(<PreviewPost />);
describe("(Component) PreviewPost", function() {
	it("renders", function() {
		PreviewPostWrapper.should.have.length(1);
	});
});


var Sidebar = require("../../client/js/components/sidebar");
var SidebarWrapper = shallow(<Sidebar />);
describe("(Component) Sidebar", function() {
	it("renders", function() {
		SidebarWrapper.should.have.length(1);
	});
});



