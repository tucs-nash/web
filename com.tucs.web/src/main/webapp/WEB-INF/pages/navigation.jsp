<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<nav class="navbar navbar-default navbar-primary">
    <div class="container-fluid">
        <div class="collapse navbar-collapse">
        	<form id="logoutForm" action="/logout" class="pull-right" ></form>        
            <ul class="nav navbar-nav navbar-right navbar-toolbox" ng-show="!login">
                <li><a href="/user"><i class="fa fa-gear"></i></a></li>
                <li class="navbar-toolbox-user">
					<a class="btn btn-default" href="javascript:document.getElementById('logoutForm').submit();">Logout</a>
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

