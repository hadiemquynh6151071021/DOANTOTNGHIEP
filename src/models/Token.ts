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
        const subArray = role.sub.slice(1,-1).split(', ');
        if(subArray[0] == IPermission.One){
            return 1
        }
        else if(subArray[0] == IPermission.Two){
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
