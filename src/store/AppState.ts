import * as L from './login'
import * as S from './signup'
import * as CCR from './createChatRoom'
export type AppState = {
  login: L.State
  signup: S.State
  createChatRoom: CCR.State
}
