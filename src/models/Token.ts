export const enum IPermission {
    One = 'Trưởng nhóm',
    Two = 'Trưởng phòng',
    Three = 'Đối tác xây dựng',
}

export function checkPermission(token: string | null): Number {
    const jwt = require("jsonwebtoken")
    if (!token) return 0;
    try {
        const role = jwt.decode(token);
        //const subArray = listRole.sub.slice(1,-1).split(', ');
        if(role == IPermission.One){
            //alert(IPermission.One)
            return 1
        }
        else if(role === IPermission.Two){
            //alert(IPermission.Two)
            return 2
        }
        else {
        return 3
          }
  } catch (error) {
      console.error('Lỗi khi giải mã token:', error);
      return 0;
  }
}