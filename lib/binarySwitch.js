const assert = require('assert')
class BinarySwitch {
    constructor() {
        this._state = 0;
    }
    /**
     * 设置状态
     * @param {number} state 状态，正整数
     * @return {number}
     */
    setState(state) {
        this.assert(state)
        return this._state = +state
    }
    /**
     * 获取状态
     * @return {number}
     */
    getState() {
        return this._state
    }
    /**
     * 获取二进制字符串
     * @return {string}
     */
    getBinary() {
        return this._state.toString(2)
    }
    /**
     * 重置开关
     * @return {number}
     */
    reset() {
        return this._state = 0
    }
    /**
     * 开启idx位，返回this.state
     * @param {number} idx 二进制位数
     * @return {number}
     */
    on(idx) {
        this.assert(idx)
        return this._state |= 1 << idx
    }
    /**
     * 关闭idx位，返回this.state
     * @param {number} idx 二进制位数
     * @return {number}
     */
    off(idx) {
        this.assert(idx)
        return this._state ^= 1 << idx
    }
    /**
     * 批量开启二进制位
     * @param {array} idxs 一组二进制位数
     * @return {number}
     */
    batchOn(idxs) {
        idxs.forEach(idx => this.on(idx))
        return this.getState()
    }
    /**
     * 批量关闭二进制位
     * @param {array} idxs 一组二进制位数
     * @return {number}
     */
    batchOff(idxs) {
        idxs.forEach(idx => this.off(idx))
        return this.getState()
    }
    /**
     * 开启idx位，返回this
     * @param {number} idx 二进制位数
     * @return {BinarySwitch}
     */
    _on(idx) {
        this.assert(idx)
        this._state |= 1 << idx
        return this
    }
    /**
     * 关闭idx位，返回this
     * @param {number} idx 二进制位数
     * @return {BinarySwitch}
     */
    _off(idx) {
        this.assert(idx)
        this._state ^= 1 << idx
        return this
    }
    /**
     * idx位开？
     * @param {number} idx 二进制位数
     * @return {number}
     */
    isOn(idx) {
        this.assert(idx)
        return (this._state & (1 << idx)) != 0
    }
    /**
     * idx位关？
     * @param {number} idx 二进制位数
     * @return {number}
     */
    isOff(idx) {
        this.assert(idx)
        return (this._state & (1 << idx)) == 0
    }
    /**
     * 正整数判断
     * @param {number} num 正整数
     */
    assert(num) {
        assert(/^[0-9]+$/.test(num), '必须是正整数')
    }
}
/**
 * 测试
 */
try {
    let bs = new BinarySwitch();
    bs.setState(31)
    bs.batchOn([0, 1, 2, 3])
    let num = bs.batchOff([0, 2])
    console.log(bs.getState(), num)
} catch (error) {
    console.error('error', error);
}
