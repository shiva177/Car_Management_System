import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  try{
    let response = {
        "clientName": "Thunder Client",
        "collectionName": "Car Management",
        "collectionId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
        "dateExported": "2024-11-14T06:11:34.004Z",
        "version": "1.2",
        "folders": [
            {
                "_id": "8fa84ad4-d96d-451f-aa5d-95d574cd2baa",
                "name": "auth",
                "containerId": "",
                "created": "2024-11-14T04:25:01.662Z",
                "sortNum": 10000
            },
            {
                "_id": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "car",
                "containerId": "",
                "created": "2024-11-14T04:25:12.899Z",
                "sortNum": 20000
            }
        ],
        "requests": [
            {
                "_id": "caf943f5-d6b1-4175-8d44-db968c23e833",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "8fa84ad4-d96d-451f-aa5d-95d574cd2baa",
                "name": "createuser",
                "url": "http://localhost:5000/api/auth/createuser",
                "method": "POST",
                "sortNum": 10000,
                "created": "2024-11-14T04:26:01.114Z",
                "modified": "2024-11-14T04:47:52.548Z",
                "headers": [],
                "body": {
                    "type": "json",
                    "raw": "{\n  \"name\":\"sarvesh\",\n  \"email\":\"sarvesh123@gmail.com\",\n  \"password\":\"sarvesh\"\n}",
                    "form": []
                }
            },
            {
                "_id": "ed830c1f-02a1-4b2e-b41c-f99ff69e3e1c",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "8fa84ad4-d96d-451f-aa5d-95d574cd2baa",
                "name": "login",
                "url": "http://localhost:5000/api/auth/login",
                "method": "GET",
                "sortNum": 20000,
                "created": "2024-11-14T04:49:35.009Z",
                "modified": "2024-11-14T04:54:29.520Z",
                "headers": [],
                "body": {
                    "type": "json",
                    "raw": "{\n  \"email\":\"kaushik123@gmail.com\",\n  \"password\":\"kaushik\"\n}",
                    "form": []
                }
            },
            {
                "_id": "274c057d-6622-4fa7-8c07-b6093f3925b9",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "8fa84ad4-d96d-451f-aa5d-95d574cd2baa",
                "name": "getuser",
                "url": "http://localhost:5000/api/auth/getuser",
                "method": "GET",
                "sortNum": 30000,
                "created": "2024-11-14T04:52:36.863Z",
                "modified": "2024-11-14T04:53:59.458Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ]
            },
            {
                "_id": "4729c756-ee75-44ee-969b-4dfde7dddc03",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "createcar",
                "url": "http://localhost:5000/api/car/createCar",
                "method": "POST",
                "sortNum": 40000,
                "created": "2024-11-14T04:55:44.245Z",
                "modified": "2024-11-14T05:57:17.618Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": "{\n  \"title\": \"2024 Toyota Camry\",\n  \"description\": \"A reliable and fuel-efficient sedan with a sleek design and advanced features.\",\n  \"images\": [\n    \"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMWFhUVFxUXFxUYFRgYGBcVFRUWFhgVFRcYHSggGB0lHRUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mICUtLS0tLS0tLS0vLS0tLS0rLS0tLS8tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEsQAAEDAQQGBgYGBggGAwAAAAEAAgMRBBIhMQUTQVFhcQYigZGhsTJCUsHR8AcUYoKS4SMzQ1NyohdUg5OywtLxFkRjc4TTFTTi/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAQMCAwcEAwEAAAAAAAABAhESAwQhEzEFQVEiYXGRodHwMoHB8TNCsSP/2gAMAwEAAhEDEQA/AOuuJXVa9zRmQpR0dkar35HysSoMS1aIDFK6rZMQQxptWi7qVxWyYgWrUTEjtWm1aZExAjComFHFibVq5DEzzEmMSP1aiY1bM4gOrT3EWYk2qVszQLcSuIkxJapLFAxamoiTEm1KWKBCEiUTqU+oVstMFoU4YixArGwKWMQMRJalaAhT6lMhgZxiUDCtMwpjAmYwMzUqOpWnqU2pVyJgZupUtStDUp9QpmXAzhCn1K0RApCBMxgZwgTiFaQgUhApmawM3UJLT1CdTMdM8vs/TJ0rw0Mw4rsI7c9kYeG+rWgodnsuoHd4XkugYXawENw+dy9jsz42wgSgUu5k3dnt+iPvUXnnSPYlY+itPxyDEgUzzoDudXFn3hyJW40Arl3aAY8h0TjUYj1ZADuIzHKoKVkmtFnNCL7BuFCObBlzZ+FMvQzidTcT6tBaN0w2Y0A4du7d7+C1bq1ZnEH1abVoi6nupYxBtUlqkTcSLEsYguqTalE3E9xWyYgmpSMKMEaWrTIYARgTahHatLVpkTpgOoT6hHCJTESZl6ZnahIQLSESlqgp1C9IztSpCFHiFSMKnUNdIAEKWpR+qSMSZjpmeYlEwo/VJtWmZOmAalLUo/Vp9UrmOmAiFOIFO36Qgg/WytZwJ63Y0YnuXMaQ6exNwhic85Xnm43sGJPgpkMDphAqrXaIohWSRrB9pwFeQzK840h0utcuGsEYIyjF3+bF3isVz6kk1cTtJPiUs1geg27prZmVEYdKeAut73Y+CwLb0ztL/Qa2IcBedTm7DwXOPJ4DBVk8ViUqOsIJnR2XSVoc0OM8lTX13DadxSXPteRll2JLNmsTE6N2tutoKr22ytYYsXXermRVvbTJeEdFbKTMMRgvcJ9GOkjFyhIAoA6jhy3dhSTuiUl2Bp9HPjF6PBud5hDoyd5aMBzFDxU2aWNKTsvD224+OY7QRxWa2W0QOzcDudVpP3tvNwci26VjfhKy6fbbRvf6p7aFK9TIZoSys1t9jqg7/jkewrojOytLza7rwXBTUjxabwIJyLXcyCrNARkzxkjatd+THbg7xJZdp6RwxWjUzVFQKEAUx3rXfLFS8CbudSQBTfVTM1iQTrz3TPTyeOVzI44XsBwd1jXtD6IH+kW1/uYf5v8AWt0zFo9QSqvLx9Idsp+qg7nb/wDuJf0gW393Z9ux2z+1VxYyR6gCp1XmDOn1sr6FnzG/aK/vVE9P7dsisxFBvzOH73eo0zUeT1IFMvMW/SFbv6vAeRdswP7RbHRvpnNPMI54Y4mUNX3iMRkOsaLJpo7YFSBUahSBQhMFSDkzWneEiOIWbNUTBT1VbSp3+Xcsso5KVUg4qQcpZaILgdKdLZ/r0lkY5sYj9YMDi7CvWvVHcAvQarxfpk7V2y0yNweXEXtuIAw3ZKxdho6KT6RhGDGG66UEguNI2DkG1LvBYmlOlVrl9Ka432Iup/NUuPeuIsrhfrhjhnjnuW7iMKAe4V2966xSOcu5OtcfEqtxyFVY2nM4YJi04YACu/HLgrZFRS0fZ2fJVjIeNOSiMs9nvyU8OJ79y52dKKXUzJ39iTcctysawluHHH4KNlBOFSaAipHvWbOlEmRkjYkpMbhmnS2SjD6Fisoqw5jH/de0WiM3Mjsx/M1C8d6EU1w63rDavZJLU9jeq4jLl4H3JLuZ8gZtpfShIc32Xio8a+YQ1ossDwatdESM29ZvcfcUYLdX04weLcD4U8k0+qc0gOMZPtD4UPgl0YOVttj1OAeHCmwEbdoOS2NB/ro+YWXpqzllBeDsBlVa+hW/pI+YW79klcgH0h2Zuvq682rRRwOAPELV0IXCwPDjWjcDWoosz6R3hswvNDmlvIjkVo9HI2mxPuuqC3aKU5qX/wCaFe2eWyuxODczsUGPp6rTiMwirTCAXdZpxOWee+ioYaHuzXezFDa3A9RuW47+asE2PoNzdsO1qdrAa1IGB5chTJTjZj2nxaljEvj2H9GcY8ADuPyUmSGnoN9FuzdJzTwxZf2fwVupNNvonZukWWzSiSMd5jnEUo57aMaK9ck43njAXfFXWSyX3ANDyag0LW7qY0kKtgc0BzMS9z6tYGlz3ULhUNArQXhUmgFcSFoaPZLEb7nNiqKXWhr5Nhxceo07KAO5hRsj47nptnFGNG0NHkq5tIRx+nIxvNwB7iuAtulpXilXEfad7iVydv0uQXDduPwWVG+7LmvJHrdo6WWRmcteTHnxu08VnzfSBZG5CR3Jrfe5eOv0iXZKuS2n2lrpx8y5v0PXH/SVAMoJT+Ee8pmfSUx2As7huq8Y9zV46bed66nolYdab7yQ0AucdrWDMiu0kgDi4LGrGEY8d/I9uw0+tq+3xBK5P3L79j1CDT9ocxsghjuuqfSJIoaYgCp7AUVD0kaKCWN0da45jDPOjj2ArGsdsLvRbQDANGTQMgPj8VDTTXOjwBvt67NhvNrgN14VbX7RXNaa7M4au6jKTcIJR/f7nZWS2slbeY8OHA5c93avGvpFfdmtDvt18V2VjkZKwWhjtW8DGRhApUA9cZOBFDQrgumkrpjaCKPeMX6vFuBBvilcKEHgTTYsxjjIKSnwu5yNlmJcHBpzA4AEkrRktLnCpdt2E+zXYsaxvFWimP8A+gfcjdY7ABoA5cKesu5h8GqbSalzag0I2ep2HOqk61yY1pQVoMtvNASOcT6WHW2nyCd7xeJxy8qbVGVI0mWygpdburjXHsVkNvLjTAV2nDLDes/WZ0FcuOxWSMyNAMNtM+1cnI2oWbYF0DrVzyWc2cF56rwKbSLvYFT9bfTJgAyN0Y80ObTVxLnVpgACcOytFh9zaXBpsIpkks10uOaS3ZMQvoPMGyAvLW4/OS7/AEr0xjioLkcow9KM1pwcCuI0ZbLNCL7Y2Nd/G93ms7TnSB9oN1oaG8AanxWHPJmcaR6NZemthkoHwvjrta9rh/MipLZBJ+ptBFdj4nkdpbgvKLOHYXw8D+IeVCi4JY2OqHkEcM0U6M4Wdx0hgcAMQcBi2tNmwrX0Cw3oyd4XCS9KXOF1zi4Up6Daoix9KiwgsccN4bTyTq8FwOi+k760yRskLC9hBDm0DhntbVaPQO1iaxvFy4+mLRUY8Acly+mukU1tbdutBGTgbp76rT6JTPhYRI9lSDiZG/mVrNOFDGmZ87ZA8g3wanaVHWv9p34isDpCbS60G4/qu2hxI7EToyB0eM05x9X8l26sUjppeH6+qrjHj38Gs2R3tO7ysG1dLnNJbHHUg0qXOphwoFtnSdjaMdY/ta0d1K+KzZNJ2FpJbY2OO91XHxNFl60fQ9EfCdfzr5mNaukVokGZbdxNyopzO7mUToyz2iW6ZZ5Y4yairnF7x9gUwHE4bgc0U7pCR+rggiG8RMJ7yFU7Tjz6Urzwb1R25DwXN6vuPVHwdtczr9jZZaTGCyzwua05uuuLnne5xxcq2wWhxwY7nVvvKxhp4t9ERt4uGsd/N1e9qEtGnHS0a+V79zL1B2MGHcFOu12RX4NoLmWo/ovub+kZXtaW3m36UqXtpXmMFy5sr6mpb3k557FfDKXUpE6h23JHeIC6WLo7OG3nQPxAIFGNwOIPWcCsvV1PT6HXT8P2KfOov3kjjjot5P6xo71oWnRBmIIIa6nWLWGjjsIaMsKee1b0lkfHTWQOjDq3bzozWmdAx7jTEY8VZEwLD1tROmfT23g+y1I5x9pfF/dGBF0TlPrGm39G4YV340WzNb9TchYBgavF8AlwBEbCDSrQC44Xus8EgXQVoWuRos8jWuo5wAoDvcKjuquddo6IMqS3HMFwvZ09GtVl68lJXyNbwvS6ctPT9lSa8+9dlzZlaf0xLJMWuqy5QBlSA3AGpy37UZo21TRYi0QAHMFxfgSK/qw7wNVHRtlihlvOtBxrQtvX2k73g88eK3Ra4NtqnP33/FblOL5PHttnuYwcFNRrivz1MTolp42e03dZSORwLgSKEZVNeB8ETpzSDIpnvssgaH1aQw0FCMQPsk1BGWK2bPNZ3H/7Tm5V1kzmVBr6GBvHKowwKsZa7JXF8xIPE0IOYNfEKvUj3o8q8Ilk1HUVr4nGWvRzo8bpZVrHFlPRDw14JFcMCKjZiqG0O/Dxr/svQ2WqwmvVqXEkl7X3icSTVo28XZnIrn9OaKib14C+lLxY4bPsEDAUqaO7K5LcNXyY3vhjS6mn5fq4r919jANdjcDWpI3gKWOOIHAcuCpktNdmymaa+Ts8V0ckfLWmzRs76Zu3JSObtdv2LPvncO7ckL2/wHwXJrmzqoOg15bXacN/5KVKml3vNfIhUxxg+kXcwSFMQjIOPb8SsuaXDNdOX4iwsG5vj8UlSLGNoHenVzXqXps047UAKXK8b3uUgyJ+b7n3XHyBXojfozsm2SbsLR/lV8X0b2EGpMx5yD/SubaJWmeZSxRAfrXO5NI82IORkZPr9pHuovYx0DsA/ZuPN5V0fQnR4/Y1++/3FOApQR4uyzR/7uHxRMNmsxzeG9op5L2UdDdH/wBXb2ucfMqX/CdgH/LR91fepwSUov8ApHjjmQM/5uMDtPkiLYY4ntjxc90bJauAApIeo1tSOsRjQ47Au/6R2GwwAMbZYQ94N03BgMiRXbivPOlVuJLdYG6wM1ZI9djMGFw2GhOHxXS4s9G22mpJrUXC+f0+IJadM3HXLrhKaAMMbmyY5Ua4A8kBbHStGsex9CA6t5ruq4uAcbpNAbrseCazaUuBraENYXmN7fThc9hYXQ1IABqCW5dUEUOdnSDTDprzWySuDwAS4Boa3AlkbQ41q7EuNMABRaioVbO2rud3GeNL40BWV0s9dVC94bS8QDdbXK+6lG5bSE5jePSks0eyhlEp/DZ757woWi0uexkbv1UdbkYFGAnN5HrOO1xqeNFGMjYB3gLLkjpGOvP9U6+CJuDds7zv1dnF3kHSvY7+VX6N0abQ8siZK6mbnzgMaD6z2sYKDPJyHkAwvOwwq0A4jdWuC2rPpW0MaNS10bTSmqgNDQU9K6anDOqKXuMauhLs5P4t/wAWbWi+gsDKa41JOJa4llaZNeAXAc8eIR1psFhhALJImuHtvBfUHG6ypcNwOPOuK46R1pmPWitUtdhjkcPw0QEltuEt1d0g0LTgQRsIpgVvqyrseZbLRfMtT5cnqVo6YWa42KNkpxbrDHiXgDHrSlobXD0TkO66XpY4CkVma3DDWTPdTDbEyje5y8oh0zI09UMHYT70SzTU7s305AD3Li5SPobba7Hzyk/kv4N/SdqlkkdJI6848Loa0Vo1g2NFThXeSSSSsDSGli0YE04ZkqDp3OOLie0qixwiaa7sFfwtzPb7lIRyfJ6t3vFoaKjpKl2SBItNkOxaRxrj3LbtGlNawE0q0DEDMbCs/Skms6hIDPVA9QbHZdueXNZWjnkF0ZzFcPBwWpaUfI+ftPEdW8Ju7NN81SDuTm1FDgK1kJWaR7oyb5Ji0u4qdnldVSjgKPslhAxOJ3bApwdOb5ZQyZw2ombSpEly+0vZgQK9WmF0k4O3Eb6jFSDwZom0wvA8Aa0HiUPpx7pZb4BLI3NuEZBtQHMG4DrN4lo3pGF8nn3O9lpSjDyff4G5Z/o4tzgHARUIBB1mwioOSIH0bW//AKf416ZoK1Vs0Fc9VHXmGAFGOtXFazb5PjObi2jyM/R/bW56v8f5IW29GZ4sXGPsePeAu76VdI2xAgPAPL8lwp0/rD1nOPEOaPcsynR1hKT5M36s72o/xsS1DhmGcxI0+TkVLMBnJJyvpRzk+jrCB/1CucpHqiU6k/Z/G3/UkjxOdsbyebz41SXPL3GrR7A7SkY2+Kpfp2Ieu0feasc6Vp6LLK3lFe8i1Junph+0j+5Z7vnI7yXoqfofMuH5/RrN02w5EO5GvkrRpInKOU8opD4hqw36bnP7eUcmR0/mjKqfpOU5ySn77W/4AExmZco/n9HSC1THKGTtYR/ioletB/ZO/FEP865N1oxr+kJ42iU+BdRVPcHZxMP8QveauEvUzmiHTu3zRF5vFoEALWg3ml5kLOuW9Uem3AnHYDRYf0d9EItJMndLPMwxvb+rfGQQ+8amrCa9U+Kh03LW2Y0axhNALtGYXmk4nDOgyOeypK5DQHSm12K/9Wn1esu36GzSVuXruEjPtuypmu0VSL1JOOPkevj6HLJ/WrX+OL/1pv6GrJ/WrX+KL/1LzcfSppgftwecEB8QApj6W9LD9qw/+PH7iqZO+m+hexhriLTayQCR148wD/014awh2IoP4p2+VF239LulsqsP/jj3FcExjgKUd/ctPjmgDo34YuZ2OvHuaVN0QO1x5QOPvQkMrxgQ+hzpG0HlXmArccicsMZSMv4USOr19RqmxS2emLWyVGIIhLcRtBrguksGkm25rbNbHXZ2i7Z7W4dbhBaDm9h2OOI7aHmHXd8f95IVG63Zc7A/zKtHPJ3YVarO+J7o3i69hLXDcR5jjtCk1Gyy/WYy8ms0TQHH95GDQPO0uFQ0nlvNAYnYLm0e7baibCYJLoc87BhzT9H3XdadojNOZw96GtL+oeJA8a+5T0e+hcN7D4EFa01wyb+dyjH0X/TpOjOhGzkOd6LmPJ4AdX4d64qIn6xjnex4k5+K9K0a0wQxm6euC2/jhUNvNypka9i87EB+tUGON7D+G971WeTQ/wAka9UaYgOaKigTRwnCoVxJH5kALzOR+njAKhoMgByz71CW0BoQf1kE3Q6p9lgqVcLDMWlzYH0ALiXENNBieqaElEm+yOc9XTh+qSBW2qjmke0zxe381s2gFllbE4UMrhQ0BoGykmhGXpg8VyEtoLiLoIANeZ2EgLs7PM6eatf0I1D2CvrbRTZS88kLvGNI+FvNZampkuyPRbHbrsbGmGGoa0EuleSTTa2lAd9Fb9fb+7svbG5/+YLCEtNwS+tHZ8Fjpo45tuzUlfC7OGxk7/qtfNyp1Nn/AHNn+7ZGjzQWuecvNSaHnb4J00bzZqRWuNmUUf8Acxj3Ipmn6ZQx/gaPJZcdgdm5wbzIB/CAXeCm4RN2lx5Bo7zUnuCYxJkaf/EsvsRjsCdYhtA4fPakmC9BZXf4+SmBxQtRvCneb8haOBfcG9OIhvCHvtVsVqZtaT96nuQFmrZvHmpC7uqpC2t/dM7XPr4OCl9fO6Mf2bHf4wVQcd0zMsoERhexoJIkjq4kcaDq8jn2LkH6LNMZaf8AchI7zU1Xr/8A8k8ZSFv8NGf4aKuW3Od6Ujnc3E+aqZXJN9jxx2hjslsx4Vuk97PeqH6Gk2CI8pG/EL1TTMMUsTmPwBGD6ULSMnDkvJbcy48tvB1D6QJoeIqtIWTOiZv3LT99p8nqB0bL/Vz2NcfJyoa87qrZ0M6yNaXWgSvccmM6oaN5deFSe4K0AVmg5qB74mxs9p9R3MvXiexH/wDxrh6E1kjaaUDpWF2W26HUPCppvOaU9psWNyzzY75yPc5Z1oc0+gHt5yB/mwJTNJxrmw12hXudfNsstQR+0eRh9lsZqta2wQzUvWmzRda8dVDO6ppSlbjcOFccFy4Dt/gPcnq72vP4o0/Q3Hpf7N/T7HSv0dZYxeitD5JDebUQ6pjWuFDgXOLzifZG3Ygo9Gkk+dM68Fkax/tHvPxTiaT2vE/FcpQ1JeZ7dDcbXSd4v5mppfRjmw39gc2vbUYdpCztHP8A0jRvq3tOQ76Kt0ziCDl8FJuBDm+k0hw5ihHktQi4qmcN5rQ1dTKCpUei6d0iPrEljYKi45tfssaJB+ENcPvOXntsJjtb3A+i5zfwi57l1Gj7fHHI613q1iu3C4XnmrTRozIcGtBOQ6w5cm6F7iXOxc4kk7y41J7ytVZ5IycGmu6CJtKyO205IR1oJNa9+Pmr2WArRsnR+R+Iaab8h3lVQiuyOupudXU/VJsEh09aWCjZC0bgyMDuDVczpJbTk+9zY3/StyzdFgMXkcgK+J+C0oNHxR5NFd5x/JaPO2cVYdGTvPVaB5DvwXV6C0Y+J195BNMAK0BIoXUrStMK03rTDla35ClDKwhjq5/PeiLP1jdYwuPeUGxu8LSg0o9jbrA2MHa0VcebissqYa6xtjFZ5Lp/ds6z+05DtQM1obXqNIHE1PbsQxcTjtKYqKJci76xxVT7QqhIFB2KtFst+s8AkhzySShZP62oG2cEC1u8py4b1KMBZtR4JCc70GXjcfJSYTuogLrVpRkQ676bhtPIZrIn6WD1Iy7i51PAVRtpsTZPSYDxIx7DmgJOjTT6Li3uIWlQBZOlE5yEbfuknxNPBCv6R2nH9Kcdga0eQRUnRd+yRp5gj4ql/R+YeqDyI95V4KY8sz3mpJPEqsnfU+S1JNEzjON3n5Kl2j5Bmx/4T8FSmcXFMtD6m72HfhPwUhYH/u3/AIXIDNSAK1m6Nl/du/CVczQ8x9Q+A8ylksw7p3Jat25dC3Q0vsd7m+4q6LQkh9kdp+CWDmdRJ8hMbLIuyi0CfWkHY380ZDoiFud53M08lLFnCx6NlObx3VRdn0HK7JxP8LD8V3kNmiblG3txPiidYae4KWLOSsnRyX1jT+Knk3FacXR1tMXnsaB5lbNUziSlkA7PoxseTjXfdZXvLaoxmHtHnT3BNeAUNZXHYhCxzydioeE+tGzxR+htEvtBvHqx7X7+Dd6t0KA7FZJJnXI21O07AN5Oxbtp0NZ7OwGV7nPPqjCp4DOnEo3SGkYrIzVxAXt3+Z5XG2q0ue4ucSScz7huCxbkXsXySgnqtoN1SfNQdKUPeooF5WyBmtO3uUH2g0ohXybM0mSIUuD6BOx5VRdXNSa9AEawpKnWJKFBtVxTBnE9mHioaxSa4f7fFQhcxrR81Pepazdh4nwQ5eNyg6cBAGaw/wC/5JxJxQBtKiLQlA1BIm1qzmzV3pxMgD9cdie+dpQLZjwCrkn418koGoyUJ3WlZTX7ypa4D5xVoGgJUtZxWe6dPHMlA0dYAlrEDraqWsCgCi4qN4oczVUROgDWyUUzKUF9YptokJq4+JQButKrfaDl89qEdKBkqTaO5EAwOr84JSTbvzQL5jvU7LaGtdeLb1NhyrxG3kqQ6LQmhjJSSQUZmB7X5ea1tNabELQxnpUwAyA3lc/L0skIwA4bgsSS0OcS5xqTiSdpWcW3yasLltDnEuJxOJJzURIgjIpGXBbogUZKpFwzQeuTGVUBhcmD0GZO1MZuKAODwnvrObIrXyIUMvcUkDrOKSgJa/5+fioOtJ2Ki6TtVjYhtqVkgtad/coVOwK6nABIgoAejt6ta2m2qi9wChrvkKgIL6Kt0p2qnWk5Jqca+SAnrap755eJVZHf85p2iioLA5TGCg1OAOagLWlWX9mXJU1Uq7AoC5soCmJQhKAKOtQBhkUTKexDa35+KrfKUKEOelra8kC56kH/AJD3lWiBD5lBshr84clRf+fii7LYZHtvUwORO3lwVAhIFB0vcpWmxuYKnD580IPkoAgydiWsQ17uUgaqkCA9M6T54oYuJTlyFLa7VO/uQrX1800stEBcJMUq1+fFC61WMk2/NUAZHRVvkVRk2D5+fepObihS1vzinVBI4pIC4PPenvFOkskIvlpzVbpSkklAr5nsSvBJJUDp6nYe34JJKAQb2DxVgG5JJARcaKQfT4cEkkBJsnYm1lTQJ0kAznbNqgXUSSQEmOqmkdtSSQArn7UgUySoNjQmjL/6R/ojIbzx4LoJrRdBccGtFcPcEkljuwcpb7e6V1Tl6o3D4oUPrh3/AASSXQDcFOqSSAr1qaR9PnekkgGY4pgyppuSSQCLa4J2OoEkkBNj6Y/O9PfwSSQo7XpJJID/2Q==\"\n  ],\n  \"tags\": {\n    \"car_type\": \"Sedan\",\n    \"company\": \"Toyota\",\n    \"dealer\": \"Toyota XYZ Dealership\"\n  }\n}",
                    "form": []
                }
            },
            {
                "_id": "111a073e-748c-42c3-a996-95da906b3fbb",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "fetchall",
                "url": "http://localhost:5000/api/car/fetchAll",
                "method": "GET",
                "sortNum": 50000,
                "created": "2024-11-14T05:08:53.421Z",
                "modified": "2024-11-14T05:57:55.681Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ]
            },
            {
                "_id": "4a9f0b1a-c7bf-4737-8cd0-4ed8946b8ee7",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "searchcar",
                "url": "http://localhost:5000/api/car/searchCar",
                "method": "GET",
                "sortNum": 60000,
                "created": "2024-11-14T05:12:39.001Z",
                "modified": "2024-11-14T06:04:02.308Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": "{\n  \"keyword\":\"iconic\"\n}",
                    "form": []
                }
            },
            {
                "_id": "4bfec389-3798-4986-8166-141aa18e65b5",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "update",
                "url": "http://localhost:5000/api/car/update/673590da749b832801abc7f7",
                "method": "PUT",
                "sortNum": 70000,
                "created": "2024-11-14T06:04:53.424Z",
                "modified": "2024-11-14T06:09:32.265Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ],
                "body": {
                    "type": "json",
                    "raw": "{\n  \"title\":\"New Car Title\"\n}",
                    "form": []
                }
            },
            {
                "_id": "8f39e1fc-4398-46c0-a888-dfb424ede31a",
                "colId": "064f0e92-9667-4f3c-b364-d13ee13f8522",
                "containerId": "1dfc137b-951e-4cb2-a868-4c535a2b315b",
                "name": "delete",
                "url": "http://localhost:5000/api/car/delete/673590da749b832801abc7f7",
                "method": "DELETE",
                "sortNum": 80000,
                "created": "2024-11-14T06:09:58.442Z",
                "modified": "2024-11-14T06:10:58.190Z",
                "headers": [
                    {
                        "name": "auth-token",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzU4MGY4NDgzNzViNDkzOGIzYjU0OCIsImlhdCI6MTczMTU1OTg4OH0.WT4YfO8-Hx6eoKiAKHtDNvF0GHkr_dE-QfHkYRx-HEQ"
                    }
                ]
            }
        ],
        "ref": "rnIh7MIjjqdux72eQJ6nrKKLQpQpArac8XuKHNnqhjZNX-WmzAuV__y0pGBLFdx5_exAYTPwIsz_zZ4W_bPkAg"
    };
    res.status(200).json(response);
  }catch(error){
    res.status(500).json("Internal Server Error");
  }
});

export default router;
