const fs = require('fs')
const path = require('path')
const assert = require('assert')

const ROOT_DIR = __dirname

function getProblemName(problemDir) {
    return path.basename(problemDir).replace(/^\d+_/, '').replace(/-/g, ' ')
}

function isDirectory(filePath) {
    return fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()
}

function getVersionName(fileName) {
    return path.basename(fileName, path.extname(fileName))
}

function loadProblems(rootDir) {
    return fs.readdirSync(rootDir)
        .map((name) => path.join(rootDir, name))
        .filter(isDirectory)
        .filter((problemDir) => fs.existsSync(path.join(problemDir, 'cases.test.js')))
        .map((problemDir) => {
            const solutionsDir = path.join(problemDir, 'solutions')
            const solutionFiles = isDirectory(solutionsDir)
                ? fs.readdirSync(solutionsDir)
                    .filter((fileName) => fileName.endsWith('.js'))
                    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
                    .map((fileName) => path.join(solutionsDir, fileName))
                : []

            return {
                name: getProblemName(problemDir),
                dir: problemDir,
                testCases: require(path.join(problemDir, 'cases.test.js')),
                solutionFiles,
            }
        })
        .sort((a, b) => a.dir.localeCompare(b.dir, undefined, { numeric: true }))
}

function isEqual(actual, expected) {
    try {
        assert.deepStrictEqual(actual, expected)
        return true
    } catch (error) {
        return false
    }
}

function runSolution(fn, input) {
    const originalLog = console.log

    try {
        console.log = () => {}
        return { result: fn(...input) }
    } catch (error) {
        return { error }
    } finally {
        console.log = originalLog
    }
}

function runTests(problems) {
    const stats = {
        problemCount: problems.length,
        solutionFileCount: 0,
        uniqueCaseCount: 0,
        totalCaseCount: 0,
        passCount: 0,
        failCount: 0,
        failedSolutions: [],
    }

    problems.forEach((problem) => {
        stats.uniqueCaseCount += problem.testCases.length
        stats.solutionFileCount += problem.solutionFiles.length

        if (problem.solutionFiles.length === 0) {
            return
        }

        problem.solutionFiles.forEach((solutionFile) => {
            const version = getVersionName(solutionFile)
            const fn = require(solutionFile)
            let failedCaseCount = 0

            problem.testCases.forEach(({ input, expected }) => {
                stats.totalCaseCount += 1

                const { result, error } = runSolution(fn, input)

                const pass = !error && isEqual(result, expected)

                if (pass) {
                    stats.passCount += 1
                } else {
                    stats.failCount += 1
                    failedCaseCount += 1
                }
            })

            if (failedCaseCount > 0) {
                stats.failedSolutions.push({
                    problem: problem.name,
                    version: `${version}.js`,
                    failedCaseCount,
                })
            }
        })
    })

    return stats
}

function printSummary(stats) {
    console.log('\nSummary')
    console.log('====================================')
    console.log(`题目数量: ${stats.problemCount}`)
    console.log(`测试的版本 js 文件数量: ${stats.solutionFileCount}`)
    console.log(`题目原始 test case 数量: ${stats.uniqueCaseCount}`)
    console.log(`总执行 test case 数量: ${stats.totalCaseCount}`)
    console.log(`Pass 数量: ${stats.passCount}`)
    console.log(`失败数量: ${stats.failCount}`)

    if (stats.failedSolutions.length === 0) {
        console.log('\n失败的版本 js: 无')
        return
    }

    console.log('\n失败的版本 js:')
    stats.failedSolutions.forEach(({ problem, version, failedCaseCount }, index) => {
        console.log(`${index + 1}. ${problem} / ${version}: ${failedCaseCount} 个 case 失败`)
    })
}

const problems = loadProblems(ROOT_DIR)
const stats = runTests(problems)
printSummary(stats)
