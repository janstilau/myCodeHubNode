// 将所有的错误提示, 集中定义在一个地方, 然后所有对于错误的处理, 都是通过引入这个文件, 然后使用这个文件中的变量
// 这样的好处是, 如果需要修改错误提示, 只需要修改这个文件, 而不需要在每一个文件中去修改错误提示
const NAME_OR_PASSWORD_IS_REQUIRED = 'name_or_password_is_required';
const USER_ALREADY_EXISTS = 'user_already_exists';
const USER_DOES_NOT_EXISTS = 'user_does_not_exists';
const PASSWORD_IS_INCORRENT = 'password_is_incorrent';
const UNAUTHORIZATION = 'UNAUTHORIZATION';
const UNPERMISSION = 'unpermission';

module.exports = {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
  UNPERMISSION
}
