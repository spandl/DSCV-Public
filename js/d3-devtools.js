const devTools = {
    printCountryMap(json) {
        const mapArray = json.features
        const countryList = []

        mapArray.forEach(element => {
            const obj = {}
            const props = element.properties
            obj.label = props.name
            obj.value = props.iso_a3
            if (obj.value != -99) {
                countryList.push(obj)
            }
            
        });
        countryList.sort(devTools.compare);

        devTools.download(JSON.stringify(countryList), "countrylist.json", "text/plain");
    },

    compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const nameA = a.label.toUpperCase();
        const nameB = b.label.toUpperCase();
      
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      },

      download(content, fileName, contentType) {
        let a = document.createElement("a");
        let file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
      }
      
      
};

export default devTools;
