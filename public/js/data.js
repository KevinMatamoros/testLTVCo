contentData = `
<h1 class="title">Reverse Email Lookup</h1>
<h2 class="subtitle px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
<div class="container-fluid overflow-hidden px-5">
    <div class="row gy-5">
        <div class="col-6">
            <div class="row">
                <div>
                    <span>1</span>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
    <div class="row gy-5">
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
        <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
        </div>
    </div>
</div>
`;

noResultsData = `
<div class="text-center px-5 mb-5">
  <h1 class="title result">0 Results</h1>
  <h2 class="subtitle-result">Try starting a new search below</h2>
</div>

<div class="container-fluid text-center pl-5 pr-5 mt-5 background-primary ">
  <h1 class="pt-5">Can’t Find The Right Person?</h1>
  <span class="primary-span ">Try Again</span>
  <span class="secondary-span"> - Make a new search</span>
  <div id="searchSection" class="input-group input-group-lg">
      <input class="input-text form-control" type="email" name="researchUser" aria-label="Large" id="researchUser" aria-describedby="inputGroup-sizing-sm"
          placeholder="Email">
      <input type="submit" id="submit" onclick="loadInfo()" class="button-go" value="GO!">
  </div>
  <i class="icon-lock"></i>
</div>
`;

const resultsData = `
<div class="text-center px-5 mb-5">
  <h1 class="title result">1 Results</h1>
  <h2 class="subtitle-result">Look at the result below to see the details of the person you’re searched for.</h2>
</div>

<div class="container-fluid text-center pl-5 pr-5 mt-5 background-primary ">
  <h1 class="pt-5">Can’t Find The Right Person?</h1>
  <span class="primary-span ">Try Again</span>
  <span class="secondary-span"> - Make a new search</span>
  <div id="searchSection" class="input-group input-group-lg">
      <input class="input-text form-control" type="email" name="researchUser" aria-label="Large" id="researchUser" aria-describedby="inputGroup-sizing-sm"
          placeholder="Email">
      <input type="submit" id="submit" onclick="loadInfo()" class="button-go" value="GO!">
  </div>
  <i class="icon-lock"></i>
</div>
`;