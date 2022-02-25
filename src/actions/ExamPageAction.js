import apiClient from "../api/client";

export const fetchExamPageData =
  (params, handleState = null) =>
  (dispatch) => {
    var urlOverview =
      "https://apis.shiksha.com/apigateway/examapi/v3/info/getExamPage?exam=cat&data=eyJ1cmwiOiIvbWJhL2NhdC1leGFtIiwidW5TZXRPdGhlckNoaWxkUGFnZVdpa2kiOnRydWV9";
    var urlResult =
      "https://apis.shiksha.com/apigateway/examapi/v3/info/getExamPage?exam=cat&data=eyJ1cmwiOiIvbWJhL2NhdC1leGFtLXJlc3VsdHMifQ==";
    
    
      var url = urlOverview;
    if (!params || Object.keys(params).length === 0) url = urlOverview;
    else if (params.name == "Overview") url = urlOverview;
    else url = urlResult;

    apiClient
      .get(url)
      .then((response) => {
        if (handleState != null) handleState(response.data.data);
        dispatch({
          type: "A",
          data: response.data.data,
        });
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
