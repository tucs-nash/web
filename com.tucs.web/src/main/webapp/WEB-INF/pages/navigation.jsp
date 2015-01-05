<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<sec:authorize access="isAuthenticated()">  
	<nav class="navbar navbar-default navbar-primary">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
        	<form id="logoutForm" action="/logout" class="pull-right" ></form>        
		            <ul class="nav navbar-nav navbar-right navbar-toolbox" ng-show="!login">
				        <p class="navbar-text"> Hi <sec:authentication property="principal.firstName"/>!</p>
		                <li><a href="/user"><i class="fa fa-gear"></i></a></li>
		                <li class="navbar-toolbox-user">
							<button type="button" class="btn btn-default navbar-btn" onclick="javascript:document.getElementById('logoutForm').submit();">{{'LABEL_LOGOUT' | i18n }}</button>
		                </li>
		            </ul>
	        </div>
	    </div>
	</nav>

	<nav class="navbar navbar-default"  ng-show="!login">
	    <div class="container-fluid">
	        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
	            <ul class="nav navbar-nav">
	                <li><a href="/" target="_self">Control</a></li>
	                <li><a href="/" target="_self">Reports</a></li>
	            </ul>
	        </div>
	    </div>
	</nav>
</sec:authorize>
