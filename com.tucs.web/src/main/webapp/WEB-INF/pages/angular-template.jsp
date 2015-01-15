<%--
  Created by IntelliJ IDEA.
  User: melodym
  Date: 13/11/2014
  Time: 16:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<%@include file="./header.jsp" %>

<body ng-app="tucs.app">
<%@include file="./navigation.jsp" %>

<div class="container-fluid">
    <div ng-view>
    </div>
</div>

<!------------------------- FRAMEWORKS ------------------------->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/resources/js/bootstrap.min.js"></script>
<script src="/resources/js/angular.js"></script>
<script src="/resources/js/angular-route.js"></script>
<script src="/resources/js/angular-ui-date.js"></script>
<script src="/resources/js/ui-grid-min.js"></script>
<script src="/resources/js/ui-bootstrap-tpls-0.12.0.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>

<!------------------------- CORE ------------------------->
<script src="/resources/js/global.js"></script>
<script src="/modules/app/js/module.js"></script>
<script src="/modules/core/js/localisation-module.js"></script>
<script src="/modules/core/js/ui-module.js"></script>

<!------------------------- PAGES ------------------------->
<!-- AUTH -->
<script src="/modules/pages/auth/js/auth-module.js"></script>
<script src="/modules/pages/auth/js/auth-register-controller.js"></script>
<script src="/modules/pages/auth/js/auth-forgot-controller.js"></script>
<script src="/modules/pages/auth/js/auth-service.js"></script>

<!-- INDEX -->
<script src="/modules/pages/index/js/index-module.js"></script>
<script src="/modules/pages/index/js/index-controller.js"></script>
<script src="/modules/pages/index/js/index-service.js"></script>
<script src="/modules/pages/index/js/index-control-controller.js"></script>

<!-- USER -->
<script src="/modules/pages/user/js/user-module.js"></script>
<script src="/modules/pages/user/js/user-controller.js"></script>
<script src="/modules/pages/user/js/user-service.js"></script>

<!-- CONTROL -->
<script src="/modules/pages/control/js/control-module.js"></script>
<script src="/modules/pages/control/js/control-controller.js"></script>
<script src="/modules/pages/control/js/control-details-controller.js"></script>
<script src="/modules/pages/control/js/control-service.js"></script>

<!-- CONTROL MONTHLY -->
<script src="/modules/pages/control-monthly/js/monthly-module.js"></script>
<script src="/modules/pages/control-monthly/js/monthly-controller.js"></script>
<script src="/modules/pages/control-monthly/js/monthly-service.js"></script>

<!-- GROUP -->
<script src="/modules/pages/group/js/group-module.js"></script>
<script src="/modules/pages/group/js/group-controller.js"></script>
<script src="/modules/pages/group/js/participant-controller.js"></script>
<script src="/modules/pages/group/js/group-service.js"></script>

<!-- CATEGORY -->
<script src="/modules/pages/category/js/category-module.js"></script>
<script src="/modules/pages/category/js/category-controller.js"></script>
<script src="/modules/pages/category/js/category-service.js"></script>


</body>
</html>
