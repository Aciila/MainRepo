import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Row from './src/components/Row';
import Button from './src/components/Button';

export default function App() {
    const [currVal, setCurrVal] = useState('');
    const [operator, setOperator] = useState(null);
    const [prevVal, setPrevVal] = useState(null);
    const [currMemo, setCurrMemo] = useState('');
    const [result, setResult] = useState('');

    const handleTap = (type, value) => {
        switch (type) {
            case 'number':
                setCurrVal(`${currVal}${value}`);
                break;
            case 'operator':
                setOperator(value);
                setPrevVal(currVal);
                setCurrVal('');
                break;
            case 'clear':
                setCurrVal('');
                setOperator(null);
                setPrevVal(null);
                setResult('');
                break;
            case 'posneg':
                setCurrVal(
                    result && !currVal
                        ? +result * -1
                        : prevVal && !currVal
                        ? +prevVal * -1
                        : +currVal * -1
                );
                break;
            case 'percentage':
                setCurrVal(
                    result && !currVal
                        ? +result * 0.01
                        : prevVal && !currVal
                        ? +prevVal * 0.01
                        : +currVal * 0.01
                );
                break;
            case 'mr':
                setCurrVal('');
                setPrevVal(null);
                setResult(currMemo ? currMemo : '0');
                setCurrMemo('');
                break;
            case 'mc':
                setCurrMemo('');
                break;
            case 'm+':
                setCurrVal('');
                setPrevVal(currVal);
                setCurrMemo(`${currMemo + currVal || result}`);
                break;
            case 'm-':
                setCurrVal('');
                setPrevVal(currVal);
                setCurrMemo(`${currMemo - currVal || result}`);
                break;
            case 'equal':
                const current = parseFloat(currVal);
                const previous = parseFloat(prevVal);
                const final = parseFloat(result);
                const memo = parseFloat(currMemo);

                switch (operator) {
                    case '+':
                        setCurrVal('');
                        setResult(
                            result && currVal && !prevVal
                                ? current + final
                                : prevVal && currVal
                                ? previous + current
                                : memo + current
                        );
                        setOperator(null);
                        setPrevVal(null);

                        break;
                    case '-':
                        setCurrVal('');
                        setResult(
                            result && currVal && !prevVal
                                ? final - current
                                : prevVal && currVal
                                ? previous - current
                                : memo - current
                        );
                        setOperator(null);
                        setPrevVal(null);
                        break;
                    case '*':
                        setCurrVal('');
                        setResult(
                            result && currVal && !prevVal
                                ? current * final
                                : prevVal && currVal
                                ? previous * current
                                : memo * current
                        );
                        setOperator(null);
                        setPrevVal(null);
                        break;
                    case '/':
                        setCurrVal('');
                        setResult(
                            result && currVal && !prevVal
                                ? final / current
                                : prevVal && currVal
                                ? previous / current
                                : memo / current
                        );
                        setOperator(null);
                        setPrevVal(null);
                        break;
                }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <SafeAreaView>
                <Text style={styles.value}>
                    {currMemo && operator && prevVal && !currVal
                        ? prevVal
                        : !result && !currVal && currMemo
                        ? currMemo
                        : currVal == '' && result && prevVal
                        ? prevVal
                        : currVal == '' && result
                        ? result
                        : currVal == '' && prevVal == null
                        ? '0'
                        : currVal == '' && prevVal
                        ? prevVal
                        : currVal}
                </Text>
                <Row>
                    <Button
                        text='AC'
                        theme='secondary'
                        onPress={() => handleTap('clear')}
                    />
                    <Button
                        text='+/-'
                        theme='secondary'
                        onPress={() => handleTap('posneg')}
                    />
                    <Button
                        text='%'
                        theme='secondary'
                        onPress={() => handleTap('percentage')}
                    />
                    <Button
                        text='/'
                        theme='primary'
                        onPress={() => handleTap('operator', '/')}
                    />
                </Row>
                <Row>
                    <Button
                        text='mc'
                        theme='secondary'
                        onPress={() => handleTap('mc')}
                    />
                    <Button
                        text='mr'
                        theme='secondary'
                        onPress={() => handleTap('mr')}
                    />
                    <Button
                        text='m-'
                        theme='secondary'
                        onPress={() => handleTap('m-')}
                    />
                    <Button
                        text='m+'
                        theme='primary'
                        onPress={() => handleTap('m+')}
                    />
                </Row>
                <Row>
                    <Button text='7' onPress={() => handleTap('number', 7)} />
                    <Button text='8' onPress={() => handleTap('number', 8)} />
                    <Button text='9' onPress={() => handleTap('number', 9)} />
                    <Button
                        text='x'
                        theme='primary'
                        onPress={() => handleTap('operator', '*')}
                    />
                </Row>
                <Row>
                    <Button text='4' onPress={() => handleTap('number', 4)} />
                    <Button text='5' onPress={() => handleTap('number', 5)} />
                    <Button text='6' onPress={() => handleTap('number', 6)} />
                    <Button
                        text='-'
                        theme='primary'
                        onPress={() => handleTap('operator', '-')}
                    />
                </Row>
                <Row>
                    <Button text='1' onPress={() => handleTap('number', 1)} />
                    <Button text='2' onPress={() => handleTap('number', 2)} />
                    <Button text='3' onPress={() => handleTap('number', 3)} />
                    <Button
                        text='+'
                        theme='primary'
                        onPress={() => handleTap('operator', '+')}
                    />
                </Row>
                <Row>
                    <Button
                        text='0'
                        size='big'
                        onPress={() => handleTap('number', 0)}
                    />
                    <Button text='.' onPress={() => handleTap('number', '.')} />
                    <Button
                        text='='
                        theme='primary'
                        onPress={() => handleTap('equal')}
                    />
                </Row>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end',
    },
    value: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
    },
});
