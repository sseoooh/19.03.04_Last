<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<jsp:include page="../home/top.jsp"/>
<link rel="stylesheet" href="${css}/customer/list.css" />

<div class="grid-item" id="nav">
	<jsp:include page="../employee/nav.jsp"/>
</div>

<div class="grid-item" id="side_menu" style="border: 1px soild black">
	<div class="grid-container" style="width: 200px">
		<ul class="list-group" id="cate_side_menu">
			<li class="list-group-item" id="cate_list" style="background-color: green">카테고리 목록</li>
			<li class="list-group-item" id="cate_register">카테고리 등록</li>
			<li class="list-group-item" id="cate_search">카테고리 조회</li>
			<li class="list-group-item" id="cate_modify">카테고리 수정</li>
			<li class="list-group-item" id="cate_delete">카테고리 삭제</li>
		</ul>
	
	</div>
</div>

 <div class="grid-item" id="content" style="border: 1px solid black">
	<table id="cus_tab">
	  <tr>
	    <th>No.</th>
	    <th>카테고리 제목</th>
	    <th>카테고리 설명</th>
	  </tr>
	  	<c:forEach items="${list}"  var="cat" >
	  <tr>	 	  
		<td>${cat.categoryId}</td>
	    <td>${cat.categoryName}</td>
	    <td> <a href="#">${cat.description}</a></td>
	  </tr>
	  	</c:forEach>
	</table>
<div style="height: 50px"></div>    
</div>

<jsp:include page="../home/bottom.jsp"/>

<script src="${js }oop.js">



</script>