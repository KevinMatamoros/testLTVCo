
hideElements = (elements) => {
  for (const element of elements) {
    if (element.show) {
      $(`#${element.id}`).show();
    }
    else {
      $(`#${element.id}`).hide();
    }
  }
};

loadInfo = () => {
  let email = !$("#content").is(":hidden") ? $("#searchUser").val() : $("#researchUser").val();
  hideElements([{ id: 'content', show: false }, { id: 'infoSection', show: false }, { id: 'loading', show: true }]);

  fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${email}`)
    .then(response => response.json())
    .then(data => {
      hideElements([{ id: 'loading', show: false }, { id: 'results', show: true }]);
      let response = '';
      if (!data || data.length === 0) {
        response = noResultsData;
      }
      else {
        response = resultsData;
      }
      $("#fetchResult").html(response);
    });
};

loadContent = () => {
  $("#content").html(contentData);
};

init = () => {
  hideElements([{ id: 'loading', show: false }, { id: 'results', show: false }]);
  loadContent();
};

init();