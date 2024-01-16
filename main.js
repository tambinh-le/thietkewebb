var object = {
    hoTen: "",
    soDienThoai: "",
    yeuCau: "",
    tenMonHang: "",
    giaTien: ""

}




$("#btn-1").on("click", function(){
    console.log("Khách hàng chọn mua Louis Vuitton Monogram Giant Onthego Tote Bag Reference Guide");
    alert("Đã mua thành công Louis Vuitton Monogram Giant Onthego Tote Bag Reference Guide");
    $("#btn-1").removeClass("btn-warning").addClass("btn-success");
    $("#btn-2").removeClass("btn-success").addClass("btn-warning");
    $("#btn-3").removeClass("btn-success").addClass("btn-warning");
    $("#btn-4").removeClass("btn-success").addClass("btn-warning");
    object.tenMonHang = "Louis Vuitton Monogram Giant Onthego Tote Bag Reference Guide";
    object.giaTien = "80.000.000 VNĐ"
})
$("#btn-2").on("click", function(){
    console.log("Khách hàng chọn mua 18k Gold Louis Vuitton Empreinte Monogram Clover Pendant Necklace");
    alert("Đã mua thành công 18k Gold Louis Vuitton Empreinte Monogram Clover Pendant Necklace");
    $("#btn-2").removeClass("btn-warning").addClass("btn-success");
    $("#btn-1").removeClass("btn-success").addClass("btn-warning");
    $("#btn-3").removeClass("btn-success").addClass("btn-warning");
    $("#btn-4").removeClass("btn-success").addClass("btn-warning");
    object.tenMonHang = "18k Gold Louis Vuitton Empreinte Monogram Clover Pendant Necklace";
    object.giaTien = "135.000.000 VNĐ"   
})
$("#btn-3").on("click", function(){
    console.log("Khách hàng chọn mua The Louis Vuitton Tambour Street Diver Chronograph Watch");
    alert("Đã mua thành công The Louis Vuitton Tambour Street Diver Chronograph Watch");
    $("#btn-3").removeClass("btn-warning").addClass("btn-success");
    $("#btn-1").removeClass("btn-success").addClass("btn-warning");
    $("#btn-2").removeClass("btn-success").addClass("btn-warning");
    $("#btn-4").removeClass("btn-success").addClass("btn-warning");
    object.tenMonHang = "The Louis Vuitton Tambour Street Diver Chronograph Watch";
    object.giaTien = "285.000.000 VNĐ"
})
$("#btn-4").on("click", function(){
    console.log("Khách hàng chọn mua Nuit de Feu Joins Louis Vuitton Oriental Perfumes Collection ");
    alert("Đã mua thành công Nuit de Feu Joins Louis Vuitton Oriental Perfumes Collection");
    $("#btn-4").removeClass("btn-warning").addClass("btn-success");
    $("#btn-1").removeClass("btn-success").addClass("btn-warning");
    $("#btn-3").removeClass("btn-success").addClass("btn-warning");
    $("#btn-2").removeClass("btn-success").addClass("btn-warning");
    object.tenMonHang = "Nuit de Feu Joins Louis Vuitton Oriental Perfumes Collection";
    object.giaTien = "10.600.000 VNĐ"
})
$("#btn-5").on("click", function(){
    console.log(object)
    alert("Thanh toán thành công")
    $("#btn-5").removeClass("btn-warning").addClass("btn-success")
    
})
$("#btn-10").on("click", function(){
    console.log(object)
    alert("Đã Gửi")
    $("#btn-10").removeClass("btn-warning").addClass("btn-info")
})




$("#btn-20").on("click", function(){
    object.hoTen = document.getElementById("inp-hoTen").value
    object.email = document.getElementById("inp-email").value
    object.soDienThoai = document.getElementById("inp-soDienThoai").value
    object.diaChi = document.getElementById("inp-diaChi").value
    object.maGiamGia = document.getElementById("inp-maGiamGia").value
    console.log(object)
    alert("GỬI THÀNH CÔNG")
    $("#btn-20").removeClass("btn-warning").addClass("btn-success")
})

