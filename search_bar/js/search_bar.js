'use strict';

export default function searchData(data, content) {
    for (const element of data) {
        if (element.innerHTML.toLowerCase().includes(content)) {
            element.style.display = 'block';
            continue;
        }

        element.style.display = 'none';
    }
}
