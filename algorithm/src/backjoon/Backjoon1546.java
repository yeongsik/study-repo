package backjoon;

/*
https://www.acmicpc.net/problem/1546
 */

import java.io.*;
import java.util.StringTokenizer;

public class Backjoon1546 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        int[] scoreArr = new int[n];
        int max = 0;
        StringTokenizer st = new StringTokenizer(br.readLine());

        for (int i = 0; i < n; i++) {
            scoreArr[i] = Integer.parseInt(st.nextToken());
            max = Math.max(scoreArr[i], max);
        }

        double sum = 0;
        for (int score : scoreArr) {
            sum += (double) score / max * 100;

        }
        double result = sum / n;
        System.out.println(result);
    }
}
