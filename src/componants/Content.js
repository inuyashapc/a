import './Content.css'
function Content() {
    return (
        <div className="contentDetail">
            <LeftContent />
            <RightContent />
        </div>
    )
}
function LeftContent() {
    return (
        <div className='left'>
            <h2>Category</h2>
            <ul>
                <li className="cate"><a href="#">Category 1</a></li>
                <li className="cate"><a href="#">Category 2</a></li>
                <li className="cate"><a href="#">Category 3</a></li>
                <li className="cate"><a href="#">Category 4</a></li>
            </ul>
        </div>

    )
}
function RightContent() {
    return (
        <div className='right'>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
        </div>
    )
}
export default Content