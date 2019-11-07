function NguoiDungService() {
  this.themNguoiDung = function(nguoiDung) {
    return axios({
      method: "POST",
      url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
      data: nguoiDung
    });
  };

  this.layDanhSachNguoiDung = function() {
    return axios({
      method: "GET",
      url: "http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung"
    });
  };

  this.xoaNguoiDung = function(id) {
    return axios({
      method: "DELETE",
      url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`
    });
  };

  this.layThongTinNguoiDung = function(id) {
    return axios({
      method: "GET",
      url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`
    });
  };

  this.capNhatNguoiDung = function(id, nguoiDung) {
    return axios({
      method: "PUT",
      url: `http://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
      data: nguoiDung
    });
  };

  this.timKiemNguoiDung = function(chuoiTimKiem, mangNguoiDung) {
    /**
     * 1. tao mang rong mangTimKiem
     * 2. duyet mangNguoiDung
     * 3. sd hàm indexOf so sánh
     * 4. thêm người dùng tìm thấy vào mảng mangTimKiem
     */
    //Cach 1
    // var mangTimKiem = [];

    // mangNguoiDung.map(function(item) {
    //   if (item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1) {
    //     mangTimKiem.push(item);
    //   }
    // });

    // return mangTimKiem;

    //Cach 2 dung filter
    return mangNguoiDung.filter(function(item) {
      return item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1;
    });
  };
}
