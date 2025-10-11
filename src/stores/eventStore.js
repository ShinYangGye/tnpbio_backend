import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
const toast = useToast();

// import router from '../router';
import { getEvents, getEventTop, getEventDetail } from '../api/commUseApi';
export const useEventStore = defineStore('event', () => {
  const state = reactive({
    // 이벤트 목록
    items: [],
    itemDetail: {},
  });

  // 이벤트 목록 조회
  async function doGetEvents() {
    try {
      let res = await getEvents();

      console.log(res);

      if (res.status == 200) {
        state.items = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  // 이벤트 목록 조회
  async function doGetEventDetail(id) {
    try {
      let res = await getEventDetail(id);

      console.log(res);

      if (res.status == 200) {
        state.itemDetail = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  // 이벤트 목록 조회
  async function doGetEventTop() {
    try {
      let res = await getEventTop();

      console.log(res);

      if (res.status == 200) {
        state.items = res.data;
      } else {
        toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      }
    } catch (error) {
      toast.error('데이타 조회시 오류가 발생했습니다. 잠시후 다시 확인해 주세요');
      console.log(error);
    }
  }

  return { state, doGetEvents, doGetEventTop, doGetEventDetail };
});
