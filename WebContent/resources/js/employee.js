var context = "${ctx}";
$('.page').click(()=>{
alert('2페이지넘어감'+$(this).text());
location.assign(ctx + '/customer.do?cmd=cus_list&page=list&page_num='+$(this).text());

});

$('#cate_list').click(()=>{
	location.assign('${ctx}/category.do?cmd=cate_list&page=list');
});

$('#cate_register').click(()=>{
	$('#cate_side_menu > li').attr('style','background-color: white');
	$('#cate_register').attr('style','background-color: green');
	$('#content').html('<form id="form">'
	+'  <div class="form-group">'
	+'    <label for="text">카테고리 이름:</label>'
	+'    <input type="text" class="form-control" name="cate_name">'
	+'  </div>'
	+'  <div class="form-group">'
	+'    <label for="text">상세 설명 :</label>'
	+'    <textarea rows="4" cols="50" class="form-control" name="description"></textarea>'
	+'  </div>'
	+'  <button type="submit" class="btn btn-default">Submit</button>'
	+'</form>');
});

$('#cate_search').click(()=>{
	$('#cate_side_menu > li').attr('style','background-color: white');
	$('#cate_search').attr('style','background-color: green');
	$('#content').html('<form id="form">'
	+'  <div class="form-group">'
	+'    <label for="text">카테고리 검색:</label>'
	+' 		<select>'
	+' <option name ="cate_id" value="1001">스마트폰</option>'
	+' <option name ="cate_id" value="1002">데스크탑</option>'
	+' <option name ="cate_id" value="1003">노트북</option>'
	+' <select>'
	+'  <button type="submit" class="btn btn-default">Submit</button>'
	+'</form>');
});

 $('#cate_delete').click(()=>{
		$('#cate_side_menu > li').attr('style','background-color: white');
		$('#cate_delete').attr('style','background-color: green');
		$('#content').html('<form id="form">'
				+'  <div class="form-group">'
				+'    <label for="text">삭제할 카테고리:</label><br>'
				+'		<form action="">'
				+'			<input type="radio" name="gender" value="male"> 스마트폰<br>'
				+'			<input type="radio" name="gender" value="female"> 데스크탑<br>'
				+'			<input type="radio" name="gender" value="other"> 노트북'
				+'		</form>'
				+'  </div>'
				+'  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">삭제</button>'
				+'<div class="modal fade" id="myModal" role="dialog">'
				+'    <div class="modal-dialog">'
				+'      <!-- Modal content-->'
				+'      <div class="modal-content">'
				+'        <div class="modal-header">'
				+'          <button type="button" class="close" data-dismiss="modal">&times;</button>'
				+'          <h4 class="modal-title">Modal Header</h4>'
				+'        </div>'
				+'        <div class="modal-body">'
				+'  		<div class="form-group">'
				+'    			<label for="text">카테고리 이름:</label>'
				+'   			 <input type="text" class="form-control" name="cate_name">'
				+'  		</div>'
				+'  		<div class="form-group">'
				+'    			<label for="text">상세설명</label>'
				+'    			<textarea rows="4" cols="50" class="form-control" name="description"></textarea>'
				+'  		</div>'
				+'        </div>'
				+'        <div class="modal-footer">'
				+'          <button type="button" class="btn btn-default" data-dismiss="modal">확인</button>'
				+'        </div>'
				+'      </div>'
				+'    </div>'
				+'</div>'
				+'</form>');
	});

 $('#cate_modify').click(()=>{
		$('#cate_side_menu > li').attr('style','background-color: white');
		$('#cate_modify').attr('style','background-color: #ddd');
		$('#content').html('<form id="form">'
				+'  <div class="form-group">'
				+'    <label for="text">수정할 카테고리:</label><br>'
				+'		<form action="">'
				+'			<input type="radio" name="gender" value="male"> 스마트폰<br>'
				+'			<input type="radio" name="gender" value="female"> 데스크탑<br>'
				+'			<input type="radio" name="gender" value="other"> 노트북'
				+'		</form>'
				+'  </div>'
				+'  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">수정</button>'
				+'<div class="modal fade" id="myModal" role="dialog">'
				+'    <div class="modal-dialog">'
				+'      <!-- Modal content-->'
				+'      <div class="modal-content">'
				+'        <div class="modal-header">'
				+'          <button type="button" class="close" data-dismiss="modal">&times;</button>'
				+'          <h4 class="modal-title">삭제하실 항목을 선택해주세요</h4>'
				+'        </div>'
				+'        <div class="modal-body">'
				+'  		<div class="form-group">'
				+'    			<label for="text">카테고리 이름:</label>'
				+'   			 <input type="text" class="form-control" name="cate_name">'
				+'  		</div>'
				+'  		<div class="form-group">'
				+'    			<label for="text">상세설명</label>'
				+'    			<textarea rows="4" cols="50" class="form-control" name="description"></textarea>'
				+'  		</div>'
				+'        </div>'
				+'        <div class="modal-footer">'
				+'          <button type="button" class="btn btn-default" data-dismiss="modal">확인</button>'
				+'        </div>'
				+'      </div>'
				+'    </div>'
				+'</div>'
				+'</form>');
	});