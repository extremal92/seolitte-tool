import React from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlog } from '../redux/actions/blog';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Blog() {

    const dispatch = useDispatch();
    const items = useSelector(({ blog }) => blog.items);
    const isLoaded = useSelector(({ blog }) => blog.isLoaded);

    React.useEffect(() => {
      dispatch(fetchBlog());
    }, [dispatch]);

    const settings = {
        dots: true,
        autoplay: false,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
            }
        ]
    };
    return (
        <div className='container'>
          <div className='page-title-center'>
            <h3>Blogs</h3>
          </div>
          <div className="blog">
            {isLoaded ?  
              <Slider {...settings}>
                {items && items.map((item, key) => 
                  <div key={key}>
                    <div className='blog-item'>
                      <div className='blog-item-title'>
                        <h3>{item.title}</h3>
                      </div>
                      <a href="/">
                        <div className='blog-item-image'>
                          <img src={item.img}  alt={item.title} className="blog-item-image-img"/>
                        </div>
                        <div className='blog-item-info'>
                          <span>{item.desc}</span>
                          <span className='blog-item-info-link'>{item.btn}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  ) }
              </Slider>
            : null }
            {/* <Slider {...settings}>
              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Watch weekly SEO tutorials</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="https://insoft-im.com/wp-content/uploads/2017/10/seo.jpg"  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>What is SEO and How Does it Work?</span>
                      <span className='blog-item-info-link'>Watch →</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Read “How To” SEO guides</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="data:image/jpeg;base64,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8POq6fzZG1HSaRWQdDqFcD1OAgwQPURnVHHb+E4+s3cE+Z4v9bpr4eLf4mTBPcHB+Y+f0kGg2ej6zpL1za2n09oXUg79K1qnzqXVyhQHg2NvIOP1OOeDK+FosUk+ZqD0fQ6nQ+YK22mosjJ+UpFS2+XkYDYGHOD7n7Y6Sa9Mw5MsraTf9tdfC+j6lT4I/DM6qoanWtZVW6q1VaFQ7Bhnc+4HaO2B3+fynE8tbI3xx3uyHf8AhzanURomZvh7BYadSQDu2puw4HZgc8cZxn5yrNmfCuHm3X3f4LtPhi5vjukr+qX5J3TdDpem6a7WCxGur1D1CmxsrZsfaqgJlgwHOSPfJ45neHJOUVfVFOq02JZb/wCLtfH1+TB9U6g2osNjAAdlQchRknH17yzHDgjw235/b4HGSUZTc1FRvnSq33+b6kSWHIgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAW2i8RamsBTY7oBjbvK4GMcEfTjnMzvSYG7cfq/3NEtbq+GoZGq8Iv7pv6ll07xrqNPWKqsqhyHXcTkFixK/9ZJ5b37S3gj3GT397d39bd7/AGIY8SuHDbAyhrGwWOTuTHJHvksfrmZp6RSm8kXTaS9eex6OHXShhjhnFSSbdefJfDf0iNrPEGqtrSprMBB+pQUd/QUzYc5Y7Sw9s7jnOczYebDFGEnKK3fMq4LCZ0nVim5bWBIG7gYzypHv95n1WF5sTgnV19zVodQtPnjlkrSv6qjRnxihG0pcQMcZXHH7zyX2TlarjX1PeXb2BO1jf9v7inxbUunSjZcCq2AsBWR6qmQY53cFg3f29u89hY2j5yWRNtk7T/iH5Wq85KrGoatUelmRTkE4ZcDHYn5Zzz2zOlDajhy3svNN+LGlUgnS6nj5Go/3aQ4NoKdMzms8ZaaxbB5N+5xaAd1YA3dsj6ZOeflNHHtR4q7Nkp8V9b5+K8PPqYkTg9g5gGg6R4x1mmWupWRqU2jyjWnqQMSV3YyM5PP1hlLwR4m+8uPGfjxeoCjZXfT5Vq2EC4YOPdcDO8Hs3tKoY+E1SnxHZ4j/ABMvvNPwyGnyiWFjlbXZihTJwABwzfznD08Zc/oWQ1MofpS7t/S7jEavUva7Wucu7F2PYFj3OJbCChFRRVkm5ycn1OqdnAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgH/2Q=="  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>What is SEO? Search Engine Optimization Explained.</span>
                      <span className='blog-item-info-link'>Read →</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Get answers in the Help Center</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoCZo25tMjRl9wg4rWdDGP69QooCUeKnOIFQ&usqp=CAU"  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>Got a question about our tools or data? Chances are good that there's an answer ready for you.</span>
                      <span className='blog-item-info-link'>300+ support articles in the Help Center →</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Watch weekly SEO tutorials</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="https://insoft-im.com/wp-content/uploads/2017/10/seo.jpg"  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>What is SEO and How Does it Work?</span>
                      <span className='blog-item-info-link'>Watch →</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Read “How To” SEO guides</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBUOEBARExAWEhASFRAWEBMQFxcXFhIWGBgYEx8ZHDQgGBolHBYVIjMhJykrOi4vGCMzOz8sQygtLisBCgoKDg0OGxAQGzAlICUtLjI3LzcvKy0uLS8rLy0xLS8tLSstLS0tLS0vLS0vLS8vKy0vLS4rLS0tLi0vLS0tLf/AABEIAIwBZwMBEQACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAABAUGAQMHAv/EADgQAAICAQMCBAQEBAUFAQAAAAECAAMRBBIhBTEGEyJBFFFhcQcjMoFSkaGxJDM0QtFicnOSshX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QANxEAAgIBAgMFBwMDAwUAAAAAAAECEQMEIRIxQQVRYXHwEyKBkaGxwTLR4RSi8SNCUgYWMzRi/9oADAMBAAIRAxEAPwDBTcYxAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAOJAOyuh25VHYdshWb+wknLnFc2HodeWRwBjJKsMZ7ZyJBKae6PiSSIAgCAIAkA4zJAyIBzAEA4zAPt62UgMrAnsCpBP2z3kWuZKTbpHywIOCCD8iMGE01aEouLpqmJJAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB9V1ljgf8TmUlFWzqEHN0jX9M6SuqFNPT6iuqBY2O6l0CMuGNjkDGMAgYX9WBKJuOSLUuXr11LMSzYMnEq6+qe6+jLzq3Sf/wA+oanz69TpXYq+pTChHACbdqBiwJUjPsRg+0yz0OLPUW2qvx5myPamp0zlkhFScq8OV+K/crtO/mbltI2WFT8NudlJqAJYhkUMR5i9sj9xxu0mCOKChDer5/Hu8fpueD2zq82SftZtxUq/Sr391U7ara2t93t4k6nwJptTRdqt50yohKWDaKiQGLbgfYYHIIneWfC1svXpkdm8eSLcm2ujap3vfV2qrfvtHmv3km2u8ldK1NdV9dttK31q2WpY4DjHY8H79vaGrRK5mkr8P0alviFJqrsY2ClMFUDHIrUkf7c47e3aYsWqlLU+wa27/gatbplg7OesjK3tt03dEzxD0LTV6bT7EC/maoMQDvYCpWBsYKW2KRzwcZ9u415JVk4V3Hm6CUs2m9rN78Vff6KvqVllWndfVpnSvBs3rQlbFa1NhXcDkFlQjPHfM87Twzxy+9O65q2+fLZrvPf1ebSywe5jSvk6irp77p3y2dfEsb9fowGoNCGtG1SbRRQozRQtrMG/UM4f1Zzh/oDN6T5nl2uVEhbKqOn3oFZmqZ6UzpKnLCzcysbMZ9IOCfYiWJJq6PPySms/Cstbr3aX3+DPPpJsLDpPSn1G9hjy6k821iyrtrDAMRnvxk/t+xi0uZEuLhbjzo1PQtJpgt1RSskOwcNh/Qf0kE912/1zL4JHz2sy5W4St8vLfrt32W3hLW06m42vfZdfXRRUpdFBrQbw3lnd6hnblyAeee+Z42tTTS6H2/ZjuLf+7b/HLrvfkvA+PxE0+neul7ThjdWu9TlymGNgzjlQdv2+nacaJv2m3Kt/XnXzZb2qqwNpe8ntt+L6q3V7tLfqZ3X9D0R0tmqo1H5iNWi6cHzC+5sMf4lAHO7txj3nqSnHipfc+e0kdQ4N5U/iqfjsm/wZYyS8SQIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBrfDfSls04szhiXUnaCcbvnn6YkvFx15nkanWTw5ZqLa2Vbvwv6WWltdujqsu097o6oxyAAD24YZww+hBHMh4Em34fucafX5MkscHJ3xPq3s0vzZirOq6hqBpDafhw7WCoBVXcxJJOBk8se/b9hOaV2e3bqiRoOtOuoXUajdqVBsLVWOSr71bIOeANxDdu4z9YrakRSbTkrovtd0m+haVW7y6dRpBYyIDYgUlcB1b2GRg8kEE55Mz6nMsUbSt3XcaOzsU9VN8T4UknfPZ9627vErfEmiBL6gOG5TKqgCrwFHOe/vj6zLodTbWPhrn13+x6faWj4U83HxPa6VLou8qukvSLQbxmrByME+3HabNSsjx1i52v5PO0csMct5/00/4PSdd1PpJ6W+l0lTqzB2oVqbARaylUcu2cHP+4tJjNPLwp7lWTE44faSj7vfW3p/Ux/Xtc4Wui5bSqNa1Za1BYNyVg7mTOec/t953lhkcri6VLpf5M3Z+XT+xpq3bum4pd3Ndd78jpv8AFFrIqogrdGrZbFYkgoQRxj3x2ndK2++voV49PwcO/wCni/u/YmHxvbs4rcW4x5h1l7J2Uf5Z+iKP1fxfxEnj2aNfGzr03jKxdI2jahHD+YXtZvWzOWJY+ng5Y8A/3nVO+ZQ8MG22ubT+K5GZA9sgfUyWWGj6b0TzNK+oFgVc8oGIB2b1598HnPyyJ5ebWSx5uCuXz96ny8OR7em7Ohl0/tLq96XL3LXPmr3f+Cu03VfLUIK62xuPpJAO7nDgj1Y7fbiXz0ntJOXE1/Hdvt+5mxdoeyioqMXXddb9+29cvLYhU6l0fzK2KPkkMhKYz8se01yhGUeGW5gjklGXFF0/D1y8Cz6P1G19bTddcWYP/mWHzAvpOM7uMZxxMupxqGCSxqnt49V8zZo8ryaqDyu1v4c0+XdZvxray1z/ABOmaxwMMMDgAg8DtkY4Hvz7T5/2eS5SfN+H4PqvaY0oRWyXivvZhvFPTbN9mtAB09mp1CrYpXaSrkcYOe4bnHt9Z9JpX/ppeuZ8hrV/rN+X2RQzSZRAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAN94PP+EX/vs/+pdj5HzfaX/sPyX2JXiD/S2/+MzqXIq0f/nh5mF6l0e/T82qoBOAQ6nPGeBnPb6Shpo+ixanHldRe/l6RBnJeTm6zqjtzfYdieWmSDtTj0jjtwJxkxQyqpqzvT5J6dt4Xwt+utnVd1C512PYxXvtwAO+fYTiGmxQlxRjTLcmsz5I8E5tru2/CO7w/o3v1NdNYy7EgDjP6SSR8yBkj6gS4yynwK6v+Tb+GOi1trLa9X6fKZ1UC1kPmbwynjjO1v55maebHjyqHJtXZpw6fNqdPLJu4XXD3V4dxRfiJRVXqUWls0+WQvrZ/UD6+/3Xt8p3h1Mczai7r8kZdBLSqLceHi6ddu/5mV3D5y8oTTPnzV/iH8xAtH0rA9iD/WCSX0tmFmAhfIYFQMkr3OOeO3f+/aU5sTyRpcyzDqYaeXHP9PJ/H9/SZo9P1F9OG8uqu1N9F9oVw5UKwJUDPuqLj5d8cznHpGl71Nrk/Xic5O18c5VHigpdHsm+teFUlyK3xjZUdUUpusvrqrrqGoscWPaRlizNgZOX29uyiWw5CfMpJ2ciAbjw9+Hl2opr1K3UqLU3qGDqyj37rjPI5GfeUx1Ed/B18mM2lk3GKrdX8Glzrz5Hf4k8DaujSs76qt6qFe3yg1j9852gKADwctgd5Dzx2dc3XzJxabInKN7JX3La7q/LkYCXkCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAWHQeqDS3C5qKr1CsPJtGUO4Yzj5ictWqCq7aLHpOhGpoZa6b7bgSSKqms25bKjPsuAP6zFk/qFnuNcPi/weli/o3peGafH4LfntvXKvyS9WLq3pbXqRZ+sblxtrdQQVBGNqk4b5EfvI1ntZ8Si9mtvPqvN9COyselwxg63T367Vs/JW77nuS16HV1HVbEvSrbTuazG5Sd4AXIPfn+onHZkckMT40+ex32/nxPPD2TjdO3e3hur3KzxH4SbSPtS5blFRtZwpUDG87RjPOK3POO09Kzxsc3JtbbVydre/2M3JLS68Gaw0a6q8BTs8xsM4rHFTZyT24kNWqKsrqNro19/A2VeosOp1V7NQptDvSotrci87EUWFsejOAcc8zNm0kMklJp7bfAv0faz0+JwUlu2+T5u34bUUurvuPquqr1DMorzS+xM2FSAPSRYcYJGV/UPvOMWmljclj2v4vz8DVqNbh1EceTP73A7vdJbq1T58uu3Q7elut+prIqNapZp8h6x6v8Qq4Bz7c88ydFpsmGE1kd2Z+2O0MGpy4XhVb108GuVmybT6zP6NR3/hf/AInof6Xh9D5dvW//AH/cYL8SEcaikOGD/CrkMCG/1F+M557Ylbq3R7Wj9p7Fe0u9+fPn4nP4e9Kq1J1IttNSiqtfMBAI8wv29J/gkcUltFczrUY8UkpZZUou/BvxN3X4M0jil/jbz5VRqVlVOUBxtYiv1Y+vMoln9lJp/k0rTR1uH3Wmu/bmvOuR5b4r6Qmi1dmlRiyLt2swAOCoPOPvLoy4lYlHhdMqZ0QIB6H4fpRtMpfO1aaDgAZJ24HJHpHPP7T5vFo1q9Xlxt0rb6Xs3+59Lru1X2Z2dg1EYcT4VHrStJ715I6+vV7KbqwOBW7cgBhuqzg/YGZoYvYayOFO0pr8G/8AqP6vs2WqcXFyxPbu2fqzz+fWHxZzJAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBxkQRZ903MjB0Yq45DKxVh9iORIFlhT17UqSWsNhZPLzYWsIXnhSTx3MUjmcFL5NfB/4NH4a8XU0WeWKnr0wXbVUreY297FZ2dm752gewAA+pMbJNs5zQlkcVBde+ubXeW/UdZ8axalQlLItAe9lrDOXtqATglstdjO0jII+3PGqT+JMME4ucX5c75X3V3mQ8XaZltFgrQVkIotrcWK52BgSR2JUggEDI5GRLHNSexXpsE8MOGbv18yv6LUWvUD5WE+3ArYt/TMXW5bkg5xcV6rc1F9VyHTu1DfnrTdV+dTyGeplz6uMlB/7fSQ88E9/szJHszPKD4aqu/wa6+ZU9VezQauyhq6msragB29RGypNu0qeARgkfWITtJ0XZdGn7jk635bJ3vydka7r9rIayleGRkPD9mfce7fOduTKo6GEZKVvZ306Ku4lV+LLAllZ0uhYW53M2nO4ZrCeghht4A7e+TKuBHocbKzqvUm1DK7V01lUVPy0KAhexbk5P1kpUct2X3gDqOkpOoTVXeSrigq2xnyUNmR6Rx+sSeJxdoz6jTrPDgbrl9D0SnxP0nTKtVurwR6sPprQSH9Q7r2IM4lKUnaRGHSQxQUG7rw7zy/x31GnU6+2+ht1TbNrYK5woHYiTBNLc1SavYoJ2ciAbzoNhNFbIzAhFXI3KcqoBx+4IngT7KzZM058Sjbdb7u34Huv/qTS6bBjw+znkailKo2k0ls7pN9dtvE7fFOss+FXz1YKa7aqrfLY7+DhWYDBxg4zj3lWLR6r20ONJqLW9rdWnfO3ty2NmTtPQz0uV4pNOal7rUlUqaaqqTvnvzR59Poz5YSQIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgHy/Y/aCGbzxarCxL/AIdUrXQabO10J9edrN25/n2mN4Z5I8+T9fM2LW4NPlUGm+JbbeuXqjP9T09radbvJZauH8wshGHICjvkE7lwO+DntJwYnCbbZ3qdTHLBJRa3voUs1mE+X7HHfBgHoa16o26byqa20/xtOH+H07/4dfI+Gbcy7s7GvIbOcs8p2SZbcrRXaivUjQ/4iqtE+Gs3EUUVYZdUPIAKKMctbgDjlvrOtuLY534dyq8FpSddUL9nlk4Ie16VJPAGUBJJzgL2bseDJndbEQ5mj8WaTQLriunb8lrUW4Nk1CwXnfWhLZByXygACgTPLM4xcVz+qVc/I0R0ftMkcktkn1Wze3urxfx8St/EXS6Su2r4VaVVkcv5TbgTuXBb1HnkyNLNy4rd8ut9/mWa3GocNRrn0ru8EZOazCIAkgldLsRbV30LeD6RU1jVgluFyV54JEhhG41HVq0fclgWxq9b+Z8DU526bT3IFG6zhA9bMEGBhUXj1E1KJbxIoPElGnsT4mgBWxVYyilaV2XbgOFYjctiOOwyGXuQSeo3yZxKuaM5LDk4JkA1XR670rrSnUadhYosPqLmnJxtdeMMeDyfnwO5z59dHTJcS3b2GLsNdoZHK6UVv/PpeZL8deIb7Ka+nOlSpU5bfUDsuAyFcBjuTHryMnO7OeJoeNxlbKNNnxZMdYuSdevPn4mLkl4gCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBxALu3rRvA8/G5NPVQDt3lhWzlcg8ZwwHtnGcj3hRVNd5Vl43OEoq6fw+Pr4d200fRNQKPIS8eQ6ONjJuwLUB4y/GFztHYbjwckzz1rMddb8l9d/merLs/VcX+xLr70u+nXufIy9XRqXXUqatUbUbbprKqLGrd0Qhq7NqsO4XnIOW5xzjVjmnFNPZ9/Pcy5YSjKUZpJrba2tvNJvxdW2QzpfKHm+SNiLU62sWO99y5V1z2JLAjAIxM0NQ5ZFHi3tpx7kr3v5dd7N+XSqOJz4PdUYtSt7t1tV11a5bVZrdYNTXY2otXSXr51J8pabV8tkY2KaypBKqys3qJxub+Js7XCkrPEhrFklKONW105GP8Q9T81/Lr8taF2YrrUquUXavJJLADgc4GTjuSeuFI7x5JTjclR1eGwDqkyARizggMP8tvYzLrcssWFzjzVfdG7QaaGpzrFk5O/Do+p6Ho6aa7tz01Mtb7iPKXnDgZGffkH9p5S7UzcTUqpc9ulnsf9t6RRUoOXF0ubaur3XXxKrx1rNN1BDq9OAfIBqsz+XYd7LsYL/vrB3LnPBbtjmexcrVcjxEoVLi3av4P1ZF0Xhmq1gqUrhjgN57Yzx3O/juJhhnzylTdfBcz6DNodDjg5KNtP/lLl8167zh/BNtSgWaa22x2YoKdzAAc7GPAU4zyf2M0SlqPaRarh2v8nkxjo/ZzTvjt8POq6fzZG1HSaRWQdDqFcD1OAgwQPURnVHHb+E4+s3cE+Z4v9bpr4eLf4mTBPcHB+Y+f0kGg2ej6zpL1za2n09oXUg79K1qnzqXVyhQHg2NvIOP1OOeDK+FosUk+ZqD0fQ6nQ+YK22mosjJ+UpFS2+XkYDYGHOD7n7Y6Sa9Mw5MsraTf9tdfC+j6lT4I/DM6qoanWtZVW6q1VaFQ7Bhnc+4HaO2B3+fynE8tbI3xx3uyHf8AhzanURomZvh7BYadSQDu2puw4HZgc8cZxn5yrNmfCuHm3X3f4LtPhi5vjukr+qX5J3TdDpem6a7WCxGur1D1CmxsrZsfaqgJlgwHOSPfJ45neHJOUVfVFOq02JZb/wCLtfH1+TB9U6g2osNjAAdlQchRknH17yzHDgjw235/b4HGSUZTc1FRvnSq33+b6kSWHIgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAW2i8RamsBTY7oBjbvK4GMcEfTjnMzvSYG7cfq/3NEtbq+GoZGq8Iv7pv6ll07xrqNPWKqsqhyHXcTkFixK/9ZJ5b37S3gj3GT397d39bd7/AGIY8SuHDbAyhrGwWOTuTHJHvksfrmZp6RSm8kXTaS9eex6OHXShhjhnFSSbdefJfDf0iNrPEGqtrSprMBB+pQUd/QUzYc5Y7Sw9s7jnOczYebDFGEnKK3fMq4LCZ0nVim5bWBIG7gYzypHv95n1WF5sTgnV19zVodQtPnjlkrSv6qjRnxihG0pcQMcZXHH7zyX2TlarjX1PeXb2BO1jf9v7inxbUunSjZcCq2AsBWR6qmQY53cFg3f29u89hY2j5yWRNtk7T/iH5Wq85KrGoatUelmRTkE4ZcDHYn5Zzz2zOlDajhy3svNN+LGlUgnS6nj5Go/3aQ4NoKdMzms8ZaaxbB5N+5xaAd1YA3dsj6ZOeflNHHtR4q7Nkp8V9b5+K8PPqYkTg9g5gGg6R4x1mmWupWRqU2jyjWnqQMSV3YyM5PP1hlLwR4m+8uPGfjxeoCjZXfT5Vq2EC4YOPdcDO8Hs3tKoY+E1SnxHZ4j/ABMvvNPwyGnyiWFjlbXZihTJwABwzfznD08Zc/oWQ1MofpS7t/S7jEavUva7Wucu7F2PYFj3OJbCChFRRVkm5ycn1OqdnAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgH/2Q=="  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>What is SEO? Search Engine Optimization Explained.</span>
                      <span className='blog-item-info-link'>Read →</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <div className='blog-item'>
                  <div className='blog-item-title'>
                    <h3>Get answers in the Help Center</h3>
                  </div>
                  <a href="/">
                    <div className='blog-item-image'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoCZo25tMjRl9wg4rWdDGP69QooCUeKnOIFQ&usqp=CAU"  alt="SEO" className="blog-item-image-img"/>
                    </div>
                    <div className='blog-item-info'>
                      <span>Got a question about our tools or data? Chances are good that there's an answer ready for you.</span>
                      <span className='blog-item-info-link'>300+ support articles in the Help Center →</span>
                    </div>
                  </a>
                </div>
              </div>
            </Slider> */}
          </div>
        </div>
    )
}

export default Blog
