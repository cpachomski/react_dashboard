 $.get(apiHit, (data) => {
      this.setState({
        dataList: data
      });
      console.log(JSON.stringify(this.state.dataList));
});