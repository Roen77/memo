
import {saveAuthToCookie,saveUserToCookie,deleteCookie} from '../../utils/cookie'

export default {
    SET_USER(state,data){
        state.user=data.user.nickname
        state.token=data.token
        saveAuthToCookie(data.token)
        saveUserToCookie(data.user.nickname)
    },
    LOGOUT(state){
        state.user=''
        state.token=''
        deleteCookie('memo_auth')
        deleteCookie('memo_user')
    },
    // 보드/카드 가져오기
    SET_LISTS(state,{id,routeName,data}){
        if(routeName === "cards"){
            state.card=data.cards
        }else{
            id?state.cards=data.cards: state.boards=data.boards
        }
    },
    //보드/카드 추가 및 수정
    SET_LIST(state, Info) {
        // 보드 추가 및 수정
        if(Info.routeName==="boards"){
            const {board}=Info.data
            if (Info.id) {
                //수정
                const index = state.boards.findIndex(b => b.id === board.id)
                state.boards.splice(index, 1, board)
            } else {
                //추가
                state.boards.unshift(board)
            }
        }
        // 카드 추가 및 수정
        if(Info.routeName==="cards"){
            const {card}=Info.data
            // 카드 수정
            if(Info.id) return
            if (Info.cardState) {
                // 카드 진행중/완료 상태 수정
                    state.card.complete=Info.complete         
            } else {
                //카드 추가
                state.cards.unshift(card)
            }
        }

    },
    // 보드,카드 삭제
    DELETE_LIST(state,{routeName,id}){
        if(routeName==="boards"){
            const index=state.boards.findIndex(board=>board.id === id)
        state.boards.splice(index,1)
        }
    },
    RESETLIST(state,route) {
            if(route.routeId){
                // 카드 데이터 초기화
                if (state.cards.length > 0) {
                    state.cards = []
                return
                }
            }else{
                // 보드 데이터 초기화
                if (state.boards.length > 0) {
                    state.boards = []
                return
                }
            }
    },
    SET_CATEGORY(state,category){
        if(category.updateId){
            state.card.Category=category.choice[0]
        }else{
            state.card.CardTypes.push(category)
        }

    },
    SET_CATEGORYS(state,categorys){
        state.categoryList=categorys
    },
    RESET_CATEGORYS(state){
        if(state.categoryList)state.categoryList=[]
    },
    SET_SEARCH(state,cards){
        state.searchList=cards
    },
    RESET_SEARCH(state){
        state.searchList=[]
    },
    DELETE_CATEGORYS(state,choiceCategory){
        const index= state.card.CardTypes.findIndex(category=>category.id == choiceCategory.id)
        state.card.CardTypes.splice(index,1)

    },
    ChangeState(state,{editState,value}){
        state.edit[editState]=value
    }
}