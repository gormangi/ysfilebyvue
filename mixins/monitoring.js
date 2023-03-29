export default {
  data() {
    return {
      start: null,
      end: null,
    }
  },
  mounted() {
    this.start = new Date();
    console.log('페이지 진입!');
  },
  destroyed() {
    this.end = new Date();
    const ttime = (this.end - this.start);

    const days = Math.floor(ttime / (1000 * 60 * 60 * 24)); // 일
    const hour = String(Math.floor((ttime/ (1000 * 60 *60 )) % 24 )).padStart(2, "0"); // 시
    const minutes = String(Math.floor((ttime  / (1000 * 60 )) % 60 )).padStart(2, "0"); // 분
    const second = String(Math.floor((ttime / 1000 ) % 60)).padStart(2, "0"); // 초

    console.log('페이지 이탈! -- 소요시간 :'+ days + '일 ' + hour + '시 ' + minutes + '분 ' + second + '초');
  }
}
