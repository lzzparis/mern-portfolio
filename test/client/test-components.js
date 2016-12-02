var React = require("react");
var shallow = require("enzyme").shallow;
var expect = require("chai").expect;

var dispatch = function() {
  return;
};
var POST = {
    _id: null,
    subject: "Apple surprise",
    body: "Here's some text, y'all",
    img: "http://placekitten.com/400/500",
    timestamp: new Date()
  };

var Admin = require("../../client/js/components/admin");
var AdminWrapper = shallow(<Admin />);
describe("(Component) Admin", function() {
	it("renders", function() {
		expect(AdminWrapper).to.have.length(1);
	});
});


var App = require("../../client/js/components/app");
var AppWrapper = shallow(<App />);
describe("(Component) App", function() {
	it("renders", function() {
		expect(AppWrapper).to.have.length(1);
	});
});


var Blog = require("../../client/js/components/blog");
var BlogWrapper = shallow(<Blog />);
describe("(Component) Blog", function() {
	it("renders", function() {
		expect(BlogWrapper).to.have.length(1);
	});
});


var BlogHeader = require("../../client/js/components/blog-header");
var BlogHeaderWrapper = shallow(<BlogHeader />);
describe("(Component) BlogHeader", function() {
	it("renders", function() {
		expect(BlogHeaderWrapper).to.have.length(1);
	});
});


var BlogMain = require("../../client/js/components/blog-main");
var BlogMainWrapper = shallow(<BlogMain />);
describe("(Component) BlogMain", function() {
	it("renders", function() {
		expect(BlogMainWrapper).to.have.length(1);
	});
});


var BlogNav = require("../../client/js/components/blog-nav");
var BlogNavWrapper = shallow(<BlogNav />);
describe("(Component) BlogNav", function() {
	it("renders", function() {
		expect(BlogNavWrapper).to.have.length(1);
	});
});


var FullPost = require("../../client/js/components/full-post");
var FullPostWrapper = shallow(<FullPost dispatch={dispatch} post={POST}/>);
describe("(Component) FullPost", function() {
	it("renders", function() {
		expect(FullPostWrapper).to.have.length(1);
	});
});


var LatestPosts = require("../../client/js/components/latest-posts");
var LatestPostsWrapper = shallow(<LatestPosts dispatch={dispatch} posts={[POST, POST]}/>);
describe("(Component) LatestPosts", function() {
	it("renders", function() {
		expect(LatestPostsWrapper).to.have.length(1);
	});
});


var Login = require("../../client/js/components/login");
var LoginWrapper = shallow(<Login />);
describe("(Component) Login", function() {
	it("renders", function() {
		expect(LoginWrapper).to.have.length(1);
	});
});


var PostForm = require("../../client/js/components/post-form");
var PostFormWrapper = shallow(<PostForm />);
describe("(Component) PostForm", function() {
	it("renders", function() {
		expect(PostFormWrapper).to.have.length(1);
	});
});


var PostList = require("../../client/js/components/post-list");
var PostListWrapper = shallow(<PostList dispatch={dispatch} posts={[POST, POST]} />);
describe("(Component) PostList", function() {
	it("renders", function() {
		expect(PostListWrapper).to.have.length(1);
	});
});


var PostSummary = require("../../client/js/components/post-summary");
var PostSummaryWrapper = shallow(<PostSummary post={POST} />);
describe("(Component) PostSummary", function() {
	it("renders", function() {
		expect(PostSummaryWrapper).to.have.length(1);
	});
});


var PreviewPost = require("../../client/js/components/preview-post");
var PreviewPostWrapper = shallow(<PreviewPost />);
describe("(Component) PreviewPost", function() {
	it("renders", function() {
		expect(PreviewPostWrapper).to.have.length(1);
	});
});


var Sidebar = require("../../client/js/components/sidebar");
var SidebarWrapper = shallow(<Sidebar />);
describe("(Component) Sidebar", function() {
	it("renders", function() {
		expect(SidebarWrapper).to.have.length(1);
	});
});



